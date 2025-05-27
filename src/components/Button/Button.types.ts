import React from 'react';

export type ButtonVariant = 'plain' | 'solid' | 'outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

