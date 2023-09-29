import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Users from '../pages/Users';
const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="users" element={<Users />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes