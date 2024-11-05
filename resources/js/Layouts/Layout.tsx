import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
import { X } from 'lucide-react';

interface LayoutProps extends PropsWithChildren {
    title?: string;
}

function Layout({ children, title }: LayoutProps) {
    return (
        <>
            <Toaster
                position="top-right"
                theme="dark"
                toastOptions={{
                    style: {
                        background: 'linear-gradient(to right, #1a1a1a, #2a2a2a)',
                        border: '1px solid rgba(255, 59, 48, 0.1)',
                        color: '#f1f1f1',
                    },
                    className: 'shadow-custom rounded-xl',
                    duration: 5000,
                    closeButton: true,
                    classNames: {
                        closeButton: 'text-dynamic-silver hover:text-dynamic-red transition-colors',
                        toast: 'group',
                        title: 'font-medium',
                        description: 'text-dynamic-silver/80',
                    },
                }}
                icons={{
                    success: <span className="text-dynamic-red">✓</span>,
                    error: <span className="text-dynamic-red">✕</span>,
                }}
            />
            <div className="min-h-screen bg-black flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default Layout; 