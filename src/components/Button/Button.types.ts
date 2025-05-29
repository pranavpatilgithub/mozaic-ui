import React from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'plain';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
}

export type ButtonSize = 'xs' | 'sm' | 'lg' | 'xl';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
}

export type ButtonColor = 'success' | 'danger' | 'warning' | 'success-outline' | 'danger-outline' | 'warning-outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: ButtonColor;
}

export type ButtonRadius = 'rounded-none' | 'rounded-sm' | 'rounded-lg' | 'rounded-full';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    radius?: ButtonRadius;
}
