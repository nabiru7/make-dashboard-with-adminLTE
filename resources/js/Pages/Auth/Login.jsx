import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            {/*begin::Head*/}
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>AdminLTE 4 | Login Page</title>
            {/*begin::Primary Meta Tags*/}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="title" content="AdminLTE 4 | Login Page" />
            <meta name="author" content="ColorlibHQ" />
            <meta
                name="description"
                content="AdminLTE is a Free Bootstrap 5 Admin Dashboard, 30 example pages using Vanilla JS."
            />
            <meta
                name="keywords"
                content="bootstrap 5, bootstrap, bootstrap 5 admin dashboard, bootstrap 5 dashboard, bootstrap 5 charts, bootstrap 5 calendar, bootstrap 5 datepicker, bootstrap 5 tables, bootstrap 5 datatable, vanilla js datatable, colorlibhq, colorlibhq dashboard, colorlibhq admin dashboard"
            />
            {/*end::Primary Meta Tags*/}
            {/*begin::Fonts*/}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@fontsource/source-sans-3@5.0.12/index.css"
                integrity="sha256-tXJfXfp6Ewt1ilPzLDtQnJV4hclT9XuaZUKyUvmyr+Q="
                crossOrigin="anonymous"
            />
            {/*end::Fonts*/}
            {/*begin::Third Party Plugin(OverlayScrollbars)*/}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/overlayscrollbars@2.10.1/styles/overlayscrollbars.min.css"
                integrity="sha256-tZHrRjVqNSRyWg2wbppGnT833E/Ys0DHWGwT04GiqQg="
                crossOrigin="anonymous"
            />
            {/*end::Third Party Plugin(OverlayScrollbars)*/}
            {/*begin::Third Party Plugin(Bootstrap Icons)*/}
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
                integrity="sha256-9kPW/n5nn53j4WMRYAxe9c1rCY96Oogo/MKSVdKzPmI="
                crossOrigin="anonymous"
            />
            {/*end::Third Party Plugin(Bootstrap Icons)*/}
            {/*begin::Required Plugin(AdminLTE)*/}
            <link rel="stylesheet" href="public/dist/css/adminlte.css" />
            {/*end::Required Plugin(AdminLTE)*/}
            {/*end::Head*/}
            {/*begin::Body*/}
            <div className="login-box m-auto vh-100 d-flex flex-column justify-content-center">
                <div className="login-logo">
                    <a href="../index2.html">
                        <b>Admin</b>LTE
                    </a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={submit}>
                            <div className="input-group mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                                <div className="input-group-text">
                                    <span className="bi bi-envelope" />
                                </div>
                            </div>
                            <InputError message={errors.email} className="mt-1 text-danger" />
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                <div className="input-group-text">
                                    <span className="bi bi-lock-fill" />
                                </div>
                            </div>
                            <InputError message={errors.password} className="mt-1 text-danger" />
                            <div className="row">
                                <div className="col-8">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={data.remember}
                                            onChange={e => setData('remember', e.target.checked)}
                                        />
                                        <label className="form-check-label">Remember Me</label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary" disabled={processing}>
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p className="mb-0">
                            <a href="register" className="text-center">
                                {" "}
                                Register{" "}
                            </a>
                        </p>
                    </div>
                    {/* /.login-card-body */}
                </div>
            </div>
            {/* /.login-box */}
            {/*begin::Third Party Plugin(OverlayScrollbars)*/}
            {/*end::Third Party Plugin(OverlayScrollbars)*/}
            {/*begin::Required Plugin(popperjs for Bootstrap 5)*/}
            {/*end::Required Plugin(popperjs for Bootstrap 5)*/}
            {/*begin::Required Plugin(Bootstrap 5)*/}
            {/*end::Required Plugin(Bootstrap 5)*/}
            {/*begin::Required Plugin(AdminLTE)*/}
            {/*end::Required Plugin(AdminLTE)*/}
            {/*begin::OverlayScrollbars Configure*/}
            {/*end::OverlayScrollbars Configure*/}
            {/*end::Script*/}
            {/*end::Body*/}
        </>

    );
}
