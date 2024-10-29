import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
    title?: string;
}

function Layout({ children, title }: LayoutProps) {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout; 