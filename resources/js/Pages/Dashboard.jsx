import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ data_donasis }) {
    return (
        <AuthenticatedLayout data_donasis={data_donasis}>
            
        </AuthenticatedLayout>
    );
}
