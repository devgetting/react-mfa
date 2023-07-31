import './dashboard.css';
import { Header } from 'components/Header';
import React from 'react';
import { DashboardContent } from './components/DashboardContent';

export default function() {
    return (
        <main className="dashboard">
            <Header />
            <DashboardContent />        
        </main>
    )
}