import './dropdown.css';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const Dropdown: React.FC<Props> = ({ children }) => {
    return (
        <ul className="dropdown">
            { children }
        </ul>
    )
};