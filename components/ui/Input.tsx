'use client';

import React, { forwardRef, useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  isValid?: boolean;
  showValidation?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, isValid, showValidation = false, className = '', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const showValidationIcon = showValidation && hasInteracted && !isFocused;
    const inputId = props.id || props.name || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-secondary-700 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            className={`w-full px-4 py-3 sm:py-3.5 ${showValidationIcon ? 'pr-11' : ''} rounded-lg border text-base min-h-[48px] ${
              error
                ? 'border-red-500 focus:ring-red-500 bg-red-50/30'
                : isValid && showValidationIcon
                ? 'border-green-500 focus:ring-green-500 bg-green-50/30'
                : 'border-secondary-300 focus:ring-primary-500'
            } focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${className}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              setHasInteracted(true);
            }}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {showValidationIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              {error ? (
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : isValid ? (
                <svg className="w-5 h-5 text-green-500 animate-in fade-in duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : null}
            </div>
          )}
        </div>
        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1.5 text-sm text-red-600 flex items-start gap-1 animate-in slide-in-from-top-1 duration-200"
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
            id={`${inputId}-helper`}
            className="mt-1.5 text-sm text-secondary-500"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
