'use client';

import React, { forwardRef, useState } from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isValid?: boolean;
  showValidation?: boolean;
  children: React.ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, helperText, isValid, showValidation = false, className = '', children, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const showValidationIcon = showValidation && hasInteracted && !isFocused;
    const selectId = props.id || props.name || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={`w-full px-4 py-3 ${showValidationIcon ? 'pr-11' : 'pr-10'} rounded-lg border appearance-none ${
              error
                ? 'border-error-500 focus:ring-error-500 bg-error-50/30'
                : isValid && showValidationIcon
                ? 'border-success-500 focus:ring-success-500 bg-success-50/30'
                : 'border-secondary-300 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${className}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setHasInteracted(true);
            }}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
            {...props}
          >
            {children}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
            {showValidationIcon && (
              <div>
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
            <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-1.5 text-sm text-error-600 flex items-start gap-1 animate-in slide-in-from-top-1 duration-200"
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
            id={`${selectId}-helper`}
            className="mt-1.5 text-sm text-secondary-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
