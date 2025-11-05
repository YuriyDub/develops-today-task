import React, { useEffect, useState } from 'react';
import './Toast.css';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number; // ms
  closable?: boolean;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration,
  onClose,
  closable,
}) => {
  const [visible, setVisible] = useState(true);

  const handleToastClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (duration === undefined) return;
    const t = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);
    return () => clearTimeout(t);
  }, [duration, onClose]);

  return (
    <div className={`dt-toast dt-toast-${type} ${visible ? 'enter' : 'leave'}`} role="status">
      <div className="dt-toast-message">{message}</div>
      {closable && (
        <button className="dt-toast-close" onClick={handleToastClose}>
          ✖
        </button>
      )}
    </div>
  );
};

export default Toast;
