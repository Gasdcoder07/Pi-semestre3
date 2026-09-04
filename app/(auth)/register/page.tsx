import { Metadata } from "next";
import Image from "next/image";
import LoginForm from "@/components/RegisterForm";

export const metadata : Metadata = {
    title : "Pacífico - Autenticación",
    description : "Registrate y crea una cuenta"
}

const page = () => {
    return (
        <div className="w-full h-full flex">
            <div className="relative w-full md:w-1/2 p-12">

                <img
                    src="/pacifico-logo-horizontal.svg"
                    alt="Logo Pacífico"
                    className="absolute top-0 left-4 h-16"/>

                <div className="max-w-md mx-auto h-full flex flex-col justify-center items-center gap-6">
                    <div className="text-center flex flex-col gap-2 mt-8">
                        <h3 className="text-3xl font-semibold">Bienvenido a Pacifico</h3>

                        <p className="text-sm text-neutral-600 leading-relaxed">Registrate y crea una cuenta para acceder a tu perfil.</p>
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
                    <h3 className="text-3xl leading-relaxed">Administra tus ventas e inventario facil.</h3>

                    <p className="max-w-2xl leading-relaxed">Registrate y empieza a llevar la gestion de tu negocio a otro nivel</p>
                </div>
            </div>
        </div>
    );
};

export default page;