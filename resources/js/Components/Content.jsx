import React, { useEffect, useState } from "react";

function Content() {
    const [donasis, setDonasis] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); //ini untuk fitur search

    useEffect(() => {
        fetch('/donasi-dashboard')
            .then((response) => response.json())
            .then((data) => setDonasis(data))
            .catch((error) => console.error(error));
    }, []);

    //ini filter untuk fitur search
    const filteredDonasis = donasis.filter(donasi =>
        donasi.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        donasi.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    {/* Search Bar */}
                    <input
                        type="text"
                        className="form-control my-3"
                        placeholder="Cari nama atau email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>Donation Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {filteredDonasis.length > 0 ? (
                                filteredDonasis.map((donasi) => (
                                    <tr key={donasi.id}>
                                        <td>{donasi.name}</td>
                                        <td>{donasi.email}</td>
                                        <td>{donasi.amount}</td>
                                        <td>{donasi.donation_date}</td>
                                        <td>{donasi.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center">Tidak ada data yang sesuai</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Content;
