import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home ()  {
    return <div>
        <h1>Home Page</h1>
        <Link to="/users">Go to User 42 Page</Link>
    </div>
}
function Users () {
    return <div>
        <Link to="/"> <h1>Home Page</h1></Link>
    </div>

}
const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<Users />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes