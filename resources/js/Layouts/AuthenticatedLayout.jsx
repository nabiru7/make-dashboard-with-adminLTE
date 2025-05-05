import Footer from '@/Components/app/Footer';
import Header from '@/Components/app/Header';
import Sidebar from '@/Components/app/Sidebar';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Content from '@/Components/Content';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <BrowserRouter>
            <div className='layout-fixed sidebar-expand-lg bg-body-tertiary'>
                <div className="app-wrapper">
                    <Header user={user}></Header>
                    <Sidebar></Sidebar>
                    <Content>{children}</Content>
                    <Footer></Footer>
                </div>
            </div>
        </BrowserRouter>
    );
}
