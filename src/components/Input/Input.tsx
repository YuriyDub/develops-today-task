import React, { useState, type InputHTMLAttributes } from 'react';
import './Input.css';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  type?: 'text' | 'password' | 'number';
  clearable?: boolean;
};

export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = false,
  value: valueProp,
  onChange,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState<string>((valueProp as string) || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  const clear = () => {
    setValue('');
    const ev = { target: { value: '' } } as unknown as React.ChangeEvent<HTMLInputElement>;
    if (onChange) onChange(ev);
  };

  const effectiveType = type === 'password' ? (visible ? 'text' : 'password') : type;

  return (
    <div className="dt-input">
      <input
        className="dt-input-field"
        style={{ paddingRight: clearable ? '32px' : '8px' }}
        {...rest}
        value={value}
        onChange={handleChange}
        type={effectiveType}
      />
      {type === 'password' && (
        <button
          aria-label="toggle-visibility"
          className="dt-input-icon"
          onClick={() => setVisible((v) => !v)}>
          {visible ? '🙈' : '👁️'}
        </button>
      )}
      {clearable && value && (
        <button aria-label="clear" className="dt-input-clear" onClick={clear}>
          ✖
        </button>
      )}
    </div>
  );
};

export default Input;
