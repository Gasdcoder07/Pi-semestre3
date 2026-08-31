import { Metadata } from "next";
import Image from "next/image";
import LoginForm from "@/components/RegisterForm";

export const metadata : Metadata = {
    title : "Pacífico - Autenticación",
    description : "Registro de usuario"
}

const page = () => {
    return (
        <div className="w-full h-full flex">
            <div className="w-full md:w-1/2 p-12 flex flex-col">
                <img
                    src="/pacifico-logo-horizontal.svg"
                    alt="Logo Pacífico"
                    className="h-16"/>

                <div className="flex-1 max-w-md mx-auto w-full flex flex-col justify-center items-center gap-6">
                    <div className="text-center flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold">Welcome to Pacifico</h3>

                        <p className="text-sm text-neutral-600 leading-relaxed">Create your account and enjoy the benefits</p>
                    </div>

                    <LoginForm/>
                </div>
            </div>

            <div className="relative hidden md:flex w-1/2 overflow-hidden rounded-xl">
                <Image
                    src="/auth_image.webp"
                    alt="Auth Image"
                    fill
                    className="object-cover"
                    priority
                    quality={75}/>

                <div className="absolute top-1/2 -translate-y-1/2 left-6 lg:left-12 text-white p-2 flex flex-col gap-2">
                    <h3 className="text-3xl leading-relaxed">Administra tus ventas e inventario sin esfuerzo.</h3>

                    <p className="max-w-2xl leading-relaxed">Crea tu cuenta y lleva tu gestion de ventas a otro nivel.</p>
                </div>
            </div>
        </div>
    );
};

export default page;