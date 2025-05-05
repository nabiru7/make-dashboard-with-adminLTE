import React from "react";

function Content({ children }) {
    return (
        <main className="app-main">
            <div className="app-content-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6"><h3 className="mb-0">Data Donasi Peduli Sesama</h3></div>
                    </div>
                </div>
            </div>
            <div className="app-content">
                <div className="container-fluid">
                </div>
            </div>
        </main>
    );
}
export default Content;