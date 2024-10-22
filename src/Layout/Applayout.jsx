import React from 'react';
import Navpar from "../Component/Navpar/Navpar";
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

export default function Layout() {
    return (
        <div>
            <Navpar />
            <Outlet />
            <Footer></Footer>
            
        </div>
    );
}
