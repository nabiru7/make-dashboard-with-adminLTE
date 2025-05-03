import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from "./app/Header";
import Footer from "./app/Footer";
import Sidebar from "./app/Sidebar";
import Content from "./Content";


function MyApp() {
    return (
        <BrowserRouter>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById('app')).render(<MyApp />);