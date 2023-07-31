import './textField.css';
import React, { forwardRef } from 'react';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    inputType?: 'default' | 'outline-light' | 'outline-dark';
}

export const TextField = forwardRef<HTMLInputElement, Props>(({ 
    inputType = 'default', 
    placeholder, 
    value, 
    onChange, 
    type, 
    ...props 
}, ref) => {
    const className = [
        'form-control',
        'mb-3',
        inputType
    ].join(' ');

    return(
        <>
            <input 
                className={className}
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
                type={type} 
                autoComplete="off"
                ref={ref}
                {...props}
            />
        </>
    )
}
)