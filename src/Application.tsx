import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from 'views/Dashboard';
import { Notification } from 'views/Dashboard/children';
import { DashboardContent } from 'views/Dashboard/components/DashboardContent';
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
                <Route 
                    element={<Dashboard />}
                    path="/dashboard"
                >
                    <Route element={<DashboardContent />} path="/dashboard" />
                    <Route
                        element={<Notification />} 
                        path="/dashboard/notification" 
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Application;