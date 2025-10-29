import { useEffect } from 'react';
import { UseFormWatch, UseFormSetValue, FieldValues } from 'react-hook-form';

interface UseFormPersistOptions<T extends FieldValues> {
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>;
  storage?: Storage;
  storageKey: string;
  exclude?: (keyof T)[];
  timeout?: number;
}

export function useFormPersist<T extends FieldValues>({
  watch,
  setValue,
  storage = typeof window !== 'undefined' ? window.localStorage : undefined,
  storageKey,
  exclude = [],
  timeout = 300,
}: UseFormPersistOptions<T>) {
  const watchedValues = watch();

  // Load saved form data on mount
  useEffect(() => {
    if (!storage) return;

    const savedData = storage.getItem(storageKey);
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        Object.keys(parsedData).forEach((key) => {
          if (!exclude.includes(key as keyof T)) {
            setValue(key as any, parsedData[key], { shouldValidate: false });
          }
        });
      } catch (error) {
        console.error('Failed to parse saved form data:', error);
      }
    }
  }, [storage, storageKey, setValue, exclude]);

  // Save form data on change (debounced)
  useEffect(() => {
    if (!storage) return;

    const timeoutId = setTimeout(() => {
      const dataToSave = { ...watchedValues };
      exclude.forEach((key) => {
        delete dataToSave[key];
      });

      // Only save if there's actual data
      const hasData = Object.values(dataToSave).some((value) => {
        if (typeof value === 'string') return value.trim().length > 0;
        return value !== undefined && value !== null && value !== '';
      });

      if (hasData) {
        storage.setItem(storageKey, JSON.stringify(dataToSave));
      }
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [watchedValues, storage, storageKey, exclude, timeout]);

  // Clear saved data
  const clearSavedData = () => {
    if (storage) {
      storage.removeItem(storageKey);
    }
  };

  return { clearSavedData };
}
