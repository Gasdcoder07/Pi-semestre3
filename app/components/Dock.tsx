"use client";

import { motion } from "framer-motion";
import { FaCalculator, FaUserShield } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Link from "next/link"

export const Dock = () => {

    const dockItems = [
        {
            name: "Admin",
            href: "/",
            icon: <FaUserShield color="lightgrey" size={28} />
        },
        {
            name: "Venta",
            href: "/sales",
            icon: <MdDashboard color="lightgrey" size={28}/>   
        },
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: <FaCalculator color="lightgrey" size={28}/>
        },
    ];

    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-blue-800/60 w-full h-1/2 absolute rounded-full blur-lg top-7" />
            <motion.div 
                className="flex flex-row items-center gap-3 px-3 py-2 border border-zinc-300 bg-white/70 backdrop-blur-md rounded-full shadow-xl"
                whileHover={{ scale: 1.3 }}
            >
                {dockItems.map((item, index) => (
                    <Link
                        href={item.href}
                        key={index}
                    >
                        <motion.button 
                            className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center"
                            title={item.name}
                            whileHover={ { scale: 1.2, rotate: 10 } }
                            whileTap={ { scale: 0.95, offsetRotate: 1 } }
                            transition={ {
                                type: "spring",
                                stiffness: 900,
                                damping: 17
                            } }
                        >
                            {item.icon}
                        </motion.button>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
};