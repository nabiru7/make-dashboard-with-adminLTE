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

        // <GuestLayout>
        //     <Head title="Log in" />

        //     {status && (
        //         <div className="mb-4 text-sm font-medium text-green-600">
        //             {status}
        //         </div>
        //     )}

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('email', e.target.value)}
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="mt-4 block">
        //             <label className="flex items-center">
        //                 <Checkbox
        //                     name="remember"
        //                     checked={data.remember}
        //                     onChange={(e) =>
        //                         setData('remember', e.target.checked)
        //                     }
        //                 />
        //                 <span className="ms-2 text-sm text-gray-600">
        //                     Remember me
        //                 </span>
        //             </label>
        //         </div>

        //         <div className="mt-4 flex items-center justify-end">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

        //             <PrimaryButton className="ms-4" disabled={processing}>
        //                 Log in
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
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
            <link rel="stylesheet" href="../../../dist/css/adminlte.css" />
            {/*end::Required Plugin(AdminLTE)*/}
            {/*end::Head*/}
            {/*begin::Body*/}
            <div className="login-box">
                <div className="login-logo">
                    <a href="../index2.html">
                        <b>Admin</b>LTE
                    </a>
                </div>
                {/* /.login-logo */}
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form action="../index3.html" method="post">
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-text">
                                    <span className="bi bi-envelope" />
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <div className="input-group-text">
                                    <span className="bi bi-lock-fill" />
                                </div>
                            </div>
                            {/*begin::Row*/}
                            <div className="row">
                                <div className="col-8">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {" "}
                                            Remember Me{" "}
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                                {/* /.col */}
                            </div>
                            {/*end::Row*/}
                        </form>
                        <div className="social-auth-links text-center mb-3 d-grid gap-2">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-primary">
                                <i className="bi bi-facebook me-2" /> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-danger">
                                <i className="bi bi-google me-2" /> Sign in using Google+
                            </a>
                        </div>
                        {/* /.social-auth-links */}
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">
                                {" "}
                                Register a new membership{" "}
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
