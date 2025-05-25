import { jsx as _jsx } from "react/jsx-runtime";
// Create the Button component
export const Button = ({ variant = 'primary', children, ...rest }) => {
    // Simple inline style based on variant (for now)
    const style = {
        backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };
    return (_jsx("button", { style: style, ...rest, children: children }));
};
