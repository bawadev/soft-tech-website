'use client';

import React, { forwardRef, useState, useEffect } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  showCharCount?: boolean;
  isValid?: boolean;
  showValidation?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, showCharCount = false, isValid, showValidation = false, className = '', maxLength, ...props }, ref) => {
    const [charCount, setCharCount] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const showValidationIcon = showValidation && hasInteracted && !isFocused;
    const textareaId = props.id || props.name || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    useEffect(() => {
      if (props.value) {
        setCharCount(String(props.value).length);
      }
    }, [props.value]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (props.onChange) {
        props.onChange(e);
      }
    };

    const charCountColor = maxLength
      ? charCount >= maxLength
        ? 'text-error-600'
        : charCount >= maxLength * 0.9
        ? 'text-warning-500'
        : 'text-secondary-500'
      : 'text-secondary-500';

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            className={`w-full px-4 py-3 sm:py-3.5 ${showValidationIcon ? 'pr-11' : ''} rounded-lg border text-base ${
              error
                ? 'border-error-500 focus:ring-error-500 bg-error-50/30'
                : isValid && showValidationIcon
                ? 'border-success-500 focus:ring-success-500 bg-success-50/30'
                : 'border-secondary-300 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none ${className}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setHasInteracted(true);
            }}
            onChange={handleChange}
            maxLength={maxLength}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
            {...props}
          />
          {showValidationIcon && (
            <div className="absolute right-3 top-3 pointer-events-none">
              {error ? (
                <svg className="w-5 h-5 text-error-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : isValid ? (
                <svg className="w-5 h-5 text-success-500 animate-in fade-in duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : null}
            </div>
          )}
        </div>
        <div className="flex justify-between items-start mt-1.5">
          <div className="flex-1">
            {error && (
              <p
                id={`${textareaId}-error`}
                className="text-sm text-error-600 flex items-start gap-1 animate-in slide-in-from-top-1 duration-200"
                role="alert"
              >
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </p>
            )}
            {helperText && !error && (
              <p
                id={`${textareaId}-helper`}
                className="text-sm text-secondary-500"
              >
                {helperText}
              </p>
            )}
          </div>
          {showCharCount && (
            <p className={`text-sm ${charCountColor} ml-2 flex-shrink-0 font-medium transition-colors`} aria-live="polite">
              {charCount}{maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
