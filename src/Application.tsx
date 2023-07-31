import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from 'views/Login';
import { RegisterDevice } from 'views/RegisterDevice';
import { SignUp } from 'views/SignUp';

const Application = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    element={<Login />}
                    path="/login" 
                />
                <Route 
                    element={<SignUp />}
                    path="/sign-up" 
                />
                <Route
                    element={<RegisterDevice />}
                    path="/register-device"
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Application;