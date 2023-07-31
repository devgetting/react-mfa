import './toast.css';
import React, { useCallback, useEffect, useState } from 'react';

interface Props {
    children: any;
}

export const Toast: React.FC<Props> = ({ children }) => {
    return (
        <div className="toast-container">
            { children }
        </div>
    )
}