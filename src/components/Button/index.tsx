import './button.css';
import React from 'react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonType?: 'default' | 'outline-light' | 'outline-dark';
    buttonSize?: 'small' | 'normal';
}

export const Button: React.FC<Omit<Props, 'className'>> = ({ 
    buttonType = 'default', 
    buttonSize = 'normal',
    children, ...props 
}) => {
    const className = [
        'form-button',
        buttonSize,
        buttonType
    ].join(' ');

    return (
        <button className={className} {...props}>
            { children }
        </button>
    )
}