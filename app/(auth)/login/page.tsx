import { Metadata } from "next";
import Image from "next/image";

export const metadata : Metadata = {
    title : "Pacífico - Autenticación",
    description : "Inicia sesión"
}

const page = () => {
    return (
        <div className="w-full h-full flex">
            <div className="relative w-full md:w-1/2 p-12">
                <img
                    src="/pacifico-logo.svg"
                    alt="Logo Pacífico"
                    className="absolute top-6 left-6 h-14"/>

                <div className="h-full flex flex-col justify-center items-center gap-6">
                    <div className="text-center flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold">Welcome back</h3>

                        <span className="text-sm text-neutral-600 leading-relaxed">Enter your email and password to access your acount.</span>
                    </div>

                    <div>

                    </div>
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
            </div>
        </div>
    );
};

export default page;
