import React, { useEffect, useState } from "react";

function Content() {
    const [donasis, setDonasis] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); //ini untuk fitur search
    const [sortAsc, setSortAsc] = useState(true); //ini untuk ascending dan descending
    const [currentPage, setCurrentPage] = useState(1); //ini untuk pagination
    const itemsPerPage = 10; //jumlah data per page

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

    //ini sortingnya
    const sortedDonasis = [...filteredDonasis].sort((a, b) => {
        return sortAsc
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });

    //ini untuk fitur ascending dan descending
    const handleSortByName = () => {
        setSortAsc(!sortAsc);
    };

    //ini untuk pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedDonasis.slice(indexOfFirstItem, indexOfLastItem);

    //ini untuk ganti page
    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (indexOfLastItem < sortedDonasis.length) setCurrentPage(currentPage + 1);
    };

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
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                            setCurrentPage(1); //supaya reset lagi ke halaman pertama waktu kita search data
                        }}
                    />
                    <table className="table">
                        <thead>
                            <tr>
                                <th onClick={handleSortByName} style={{ cursor: "pointer" }}>
                                    Name {sortAsc ? '↑' : '↓'}
                                </th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>Donation Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedDonasis.length > 0 ? (
                                currentItems.map((donasi) => (
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
                    {/* Pagination Buttons */}
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-secondary"
                            onClick={handlePrevious}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>Halaman {currentPage}</span>
                        <button
                            className="btn btn-secondary"
                            onClick={handleNext}
                            disabled={indexOfLastItem >= sortedDonasis.length}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Content;
