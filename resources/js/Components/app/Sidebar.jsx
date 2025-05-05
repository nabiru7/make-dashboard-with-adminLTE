import React from "react";
import { router } from '@inertiajs/react';

function Sidebar() {
    return (
        <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
            <div className="sidebar-brand">
                <a href="#" className="brand-link">
                    <span className="brand-text fw-light">Admin Dashboard</span>
                </a>
            </div>
            <div className="sidebar-wrapper">
                <nav className="mt-2">
                    <ul
                        className="nav sidebar-menu flex-column"
                        data-lte-toggle="treeview"
                        role="menu"
                        data-accordion="false"
                    >   <li className="nav-item">
                            <a href="/dashboard" className="nav-link">
                                <i className="nav-icon bi bi-database"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <button
                                onClick={() => router.post('/logout')}
                                className="nav-link bg-transparent border-0 text-start w-100"
                                style={{ cursor: 'pointer' }}
                            >
                                <i className="nav-icon bi bi-box-arrow-right"></i>
                                <p>Logout</p>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
