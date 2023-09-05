import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function Home() {
    return <div>home</div>;
}

function Users() {
    return <div>users</div>;
}
function AppRoutes(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;