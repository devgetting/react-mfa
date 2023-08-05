import './dashboard.css';
import { Header } from 'components/Header';
import React from 'react';
import { DashboardContent } from './components/DashboardContent';
import { Outlet, Route } from 'react-router-dom';

export default function() {
    return (
        <main className="dashboard">
            <Header />
            <Outlet />
        </main>
    )
}