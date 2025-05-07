import { router, useForm, usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Content({ data_donasis }) {
    const [donasis, setDonasis] = useState(data_donasis);
    const [searchTerm, setSearchTerm] = useState(""); //ini untuk fitur search
    const [sortAsc, setSortAsc] = useState(true); //ini untuk ascending dan descending
    const [currentPage, setCurrentPage] = useState(1); //ini untuk pagination
    const itemsPerPage = 10; //jumlah data per page
    const [editingId, setEditingId] = useState(null); //ini untuk edit data

    //ini untuk bagian Create
    const [showForm, setShowForm] = useState(false);
    const { data, setData, post, put, delete: destroy, reset, errors } = useForm({
        name: '',
        email: '',
        amount: '',
        donation_date: '',
        donation_method: 'qris',
        status: 'pending',
        message: ''
    });


    // useEffect(() => {
    //     fetch('/donasi-dashboard')
    //         .then((response) => response.json())
    //         .then((data) => setDonasis(data))
    //         .catch((error) => console.error(error));
    // }, []);

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

    //untuk input pada data Create
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const props = usePage().props;

    //untuk edit data
    const handleEdit = (id) => {
        const donasiToEdit = donasis.find((donasi) => donasi.id === id);
        if (donasiToEdit) {
            setData({
                name: donasiToEdit.name,
                email: donasiToEdit.email,
                amount: donasiToEdit.amount,
                donation_date: donasiToEdit.donation_date,
                donation_method: donasiToEdit.donation_method,
                status: donasiToEdit.status,
                message: donasiToEdit.message || '',
            });
            setEditingId(id);
            setShowForm(true);
        }
    };

    //ini untuk delete data
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Hapus data ini?");
        if (confirmDelete) {
            destroy(`/donasi-dashboard/${id}`);
            window.location.reload(); // Reload the page to fetch updated data
        }
    };

    //ini untuk menyambungkan ke backend Create
    function handleSubmit(e) {
        e.preventDefault();

        if (editingId) {
            put(`/donasi-dashboard/${editingId}`, {
                onSuccess: () => {
                    // fetchDonasis(); 
                    setShowForm(false);
                    reset()
                    setEditingId(null);
                    window.location.reload(); // Reload the page to fetch updated data
                }
            })
        } else {
            post('/donasi-dashboard', {
                onSuccess: () => {
                    setShowForm(false);
                    reset();
                    window.location.reload(); // Reload the page to fetch updated data
                }
            });
        }

    }

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
                    {/* Button Tambah Donasi */}
                    <button className="btn btn-success mb-3" onClick={() => setShowForm(true)}>
                        + Tambah Data
                    </button>

                    {/* Form Tambah Donasi */}
                    {showForm && (
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="row g-2">
                                <div className="col-md-4">
                                    <input className="form-control" type="text" placeholder="Nama" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" type="email" placeholder="Email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" type="number" placeholder="Jumlah" value={data.amount} onChange={(e) => setData({ ...data, amount: e.target.value })} required />
                                </div>
                                <div className="col-md-4">
                                    <input className="form-control" type="date" value={data.donation_date} onChange={(e) => setData({ ...data, donation_date: e.target.value })} required />
                                </div>
                                <div className="col-md-4">
                                    <select className="form-control" value={data.donation_method} onChange={(e) => setData({ ...data, donation_method: e.target.value })}>
                                        <option value="qris">QRIS</option>
                                        <option value="tunai">Tunai</option>
                                        <option value="mbanking">mBanking</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <select className="form-control" value={data.status} onChange={(e) => setData({ ...data, status: e.target.value })}>
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <textarea className="form-control" placeholder="Pesan" value={data.message} onChange={(e) => setData({ ...data, message: e.target.value })}></textarea>
                                </div>
                                <div className="col-md-12 text-end mt-2">
                                    <button className="btn btn-primary" type="submit">Simpan</button>
                                    <button className="btn btn-secondary ms-2" onClick={() => setShowForm(false)}>Batal</button>
                                </div>
                            </div>
                        </form>
                    )}
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
                                        <td>
                                            <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(donasi.id)}>Edit</button>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(donasi.id)}>Delete</button>
                                        </td>
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
