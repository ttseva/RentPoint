import React from 'react';
import './FormInput.css';

interface Option {
  value: string;
  label: string;
}

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'textarea' | 'select';
  value: string;
  onChange: (value: string) => void;
  className?: string;
  options?: Option[];
  error?: string;
  onBlur?: () => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  className = '',
  options = [],
  error,
  onBlur,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  const renderField = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className={`form-input__field form-input__textarea ${error ? 'form-input__field--error' : ''}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
          />
        );
      case 'select':
        return (
          <select
            className={`form-input__field form-input__select ${error ? 'form-input__field--error' : ''}`}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            className={`form-input__field ${error ? 'form-input__field--error' : ''}`}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
          />
        );
    }
  };

  return (
    <div className={`form-input ${className}`}>
      <label className="form-input__label">{label}</label>
      {renderField()}
      {error && <span className="form-input__error">{error}</span>}
    </div>
  );
}; 