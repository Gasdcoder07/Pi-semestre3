"use client";

import { motion } from "framer-motion";
import { FaCalculator, FaUserShield } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const Dock = () => {

    const dockItems = ['Admin', 'Venta', 'Gerente'];

    return (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-teal-700/60 w-full h-1/2 absolute rounded-full blur-lg top-7" />
            <motion.div 
                className="flex flex-row items-center gap-3 px-3 py-2 border border-zinc-300 bg-white/70 backdrop-blur-md rounded-full shadow-xl"
                whileHover={{ scale: 1.05 }}
            >
                {dockItems.map((item, index) => (
                    <motion.button 
                        key={index}
                        className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center"
                        title={item}
                        whileHover={ { scale: 1.2, rotate: 10 } }
                        whileTap={ { scale: 0.95, offsetRotate: 1 } }
                        transition={ {
                            type: "spring",
                            stiffness: 900,
                            damping: 17
                        } }
                    >
                        {item === "Admin" && (
                            <FaUserShield color="lightgrey" size={28} />
                        ) || item === "Venta" && (
                            <MdDashboard color="lightgrey" size={28}/>   
                        ) || item === "Gerente" && (
                            <FaCalculator color="lightgrey" size={28}/>
                        )}
                        {/*<h1 className="text-2xl font-semibold text-gray-300/80">{item.slice(0,1)}</h1>*/}
                    </motion.button>
                ))}
            </motion.div>
        </div>
    );
};