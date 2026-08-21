"use client";

import { motion } from "framer-motion";

export const Dock = () => {

    const dockItems = ['Admin', 'Proyectos', 'Sobre Mi', 'Contacto'];

    return (
        <div 
            className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50"
        >
            <div
                className="flex flex-row items-center gap-3 px-3 py-2 border border-zinc-300 bg-white/70 backdrop-blur-md rounded-full shadow-xl"
            >
                {dockItems.map((item, index) => (
                    <motion.button 
                        key={index}
                        className="w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center"
                        title={item}
                        whileHover={{ scale: 1.2, y: -8 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        }}
                    >
                    </motion.button>
                ))}
            </div>
        </div>
    );
};