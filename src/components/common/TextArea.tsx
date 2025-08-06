import React from 'react';
import { clsx } from 'clsx';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  showCount?: boolean;
  maxLength?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  hint,
  showCount,
  maxLength,
  className,
  id,
  value,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  const currentLength = typeof value === 'string' ? value.length : 0;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={clsx(
          'block w-full px-3 py-2 border rounded-lg shadow-sm transition-colors duration-200 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          error
            ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500'
            : 'border-gray-300 placeholder-gray-400 focus:border-blue-500',
          className
        )}
        maxLength={maxLength}
        value={value}
        {...props}
      />
      <div className="flex justify-between items-center">
        <div>
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}
          {hint && !error && (
            <p className="text-sm text-gray-500">{hint}</p>
          )}
        </div>
        {showCount && maxLength && (
          <p className={clsx(
            'text-sm',
            currentLength > maxLength * 0.9 ? 'text-orange-600' : 'text-gray-500'
          )}>
            {currentLength}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
};