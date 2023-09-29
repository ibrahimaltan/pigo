import React from "react";
import { Link } from 'react-router-dom';
const HomePage: React.FC = () => (
    <Link to="/users"> <h1>Users</h1></Link>
);
export default HomePage