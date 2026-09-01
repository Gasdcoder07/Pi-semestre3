import Sidebar from "@/components/Sidebar";
import React from "react";

export default function DashLayout({ children } : { children : React.ReactNode; }) {
    return (
        <main className="h-screen font-Inter antialiased flex">
            
            <Sidebar/>

            <div className="flex-1 w-full bg-[#F4F7F9]">
                {children}
            </div>
        </main>
    );
}