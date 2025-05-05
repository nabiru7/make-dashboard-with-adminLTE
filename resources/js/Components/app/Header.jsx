import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";


function Header({ user }) {
    useEffect(() => {
        // Reinitialize AdminLTE components
        if (window.$ && window.$.AdminLTE) {
            window.$.AdminLTE.layout.activate();
        }
    }, []);

    return (
        <nav className="app-header navbar navbar-expand bg-body">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                            <i className="bi bi-list"></i>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-lte-toggle="fullscreen">
                            <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i>
                            <i data-lte-icon="minimize" className="bi bi-fullscreen-exit" style={{ display: 'none' }}></i>
                        </a>
                    </li>
                    <li className="nav-item dropdown user-menu">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img
                                src="../../../dist/assets/img/user2-160x160.jpg"
                                className="user-image rounded-circle shadow"
                                alt="User Image"
                            />
                            <span className="d-none d-md-inline">{user && user.name || "User"}</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                            <li className="user-footer">
                                <Link href={route('logout')} method="post" className="mx-auto block text-sm">
                                    Log out
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;