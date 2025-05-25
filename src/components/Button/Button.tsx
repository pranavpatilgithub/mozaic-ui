import React from 'react';

// Define the props for your Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

// Create the Button component
export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, ...rest }) => {
  // Simple inline style based on variant (for now)
  const style = {
    backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={style} {...rest}>
      {children}
    </button>
  );
};
