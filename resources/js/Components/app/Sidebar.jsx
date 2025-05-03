import React from "react";

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
                    >
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon bi bi-speedometer"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                <p>Auth</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
