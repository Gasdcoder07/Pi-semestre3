export default function AuthLayout({ children } : { children : React.ReactNode; }) {
    return (
        <main className="h-screen font-Inter p-4">
            {children}
        </main>
    );
}