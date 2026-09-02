"use client"

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
    // Estado para controlar la contraseña
    const [showPassword, setShowPassword] = useState(false);

    // Manejar formulario de registro
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-1.5 w-1/2">
                        <label htmlFor="nombre" className="text-xs">Nombre</label>

                        <input
                            id="nombre"
                            type="text"
                            name="nombre"
                            required
                            suppressHydrationWarning
                            className="w-full p-1.5 text-sm border border-neutral-300 rounded-xl outline-none transition-all duration-200 ease-in-out hover:border-neutral-400"/>
                    </div>

                    <div className="flex flex-col gap-1.5 w-1/2">
                        <label htmlFor="apellido" className="text-xs">Apellido</label>

                        <input
                            id="apellido"
                            type="text"
                            name="apellido"
                            required
                            suppressHydrationWarning
                            className="w-full p-1.5 text-sm border border-neutral-300 rounded-xl outline-none transition-all duration-200 ease-in-out hover:border-neutral-400"/>
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="username" className="text-xs">Nombre de usuario</label>

                    <input
                        id="username"
                        type="text"
                        name="username"
                        required
                        suppressHydrationWarning
                        className="w-full p-1.5 text-sm border border-neutral-300 rounded-xl outline-none transition-all duration-200 ease-in-out hover:border-neutral-400"/>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        suppressHydrationWarning
                        className="w-full p-1.5 text-sm border border-neutral-300 rounded-xl outline-none transition-all duration-200 ease-in-out hover:border-neutral-400"/>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-xs">Contraseña</label>

                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            required
                            suppressHydrationWarning
                            className="w-full p-1.5 pr-12 text-sm border border-neutral-300 rounded-xl outline-none transition-all duration-200 ease-in-out hover:border-neutral-400"/>

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            suppressHydrationWarning
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-400"
                            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
                            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-xs">Confirmar contraseña</label>

                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            required
                            suppressHydrationWarning
                            className="w-full p-1.5 pr-12 text-sm border border-neutral-300 rounded-xl outline-none transition-all duration-200 ease-in-out hover:border-neutral-400"/>

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            suppressHydrationWarning
                            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-neutral-400"
                            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
                            {showPassword ? <EyeOff size={18}/> : <Eye size={18}/>}
                        </button>
                    </div>
                </div>

                <div className="mt-2 flex flex-col gap-3">
                    <button
                        type="submit"
                        suppressHydrationWarning
                        className="font-semibold text-white bg-cyan-600 hover:bg-cyan-500 w-full py-2.5 rounded-xl transition-colors ease-in-out duration-200 cursor-pointer">Crear cuenta</button>

                    <span className="text-neutral-600 text-center text-sm">Ya tienes una cuenta? <Link href="/login" className="font-semibold text-cyan-600 hover:text-cyan-500 ease-in-out duration-200 transition-colors">Inicia sesión</Link></span>
                </div>
        </form>
    );
};

export default RegisterForm;