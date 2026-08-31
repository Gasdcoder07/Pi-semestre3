"use client"

import { useState } from "react";

type FormData = {
    nombre: string;
    apellidos: string;
    fechaNacimiento: string;
    email: string;
    password: string;
    confirmPassword: string;
};

const STEPS = ["Datos personales", "Credenciales", "Confirmación"];

const RegisterForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        apellidos: "",
        fechaNacimiento: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const updateField = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={step === STEPS.length - 1 ? handleSubmit : (e) => e.preventDefault()} className="flex flex-col gap-4 w-full">
            <div className="flex justify-between mb-2">
                {STEPS.map((label, i) => (
                    <div key={label} className="flex-1 flex flex-col items-center gap-1">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold
                            ${i <= step ? "bg-cyan-600 text-white" : "bg-neutral-200 text-neutral-500"}`}>
                            {i + 1}
                        </div>
                        <span className="text-[10px] text-neutral-500 text-center">{label}</span>
                    </div>
                ))}
            </div>

            {step === 0 && (
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm">Nombre</label>
                        <input
                            value={formData.nombre}
                            onChange={(e) => updateField("nombre", e.target.value)}
                            required
                            suppressHydrationWarning
                            className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl outline-none"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm">Apellidos</label>
                        <input
                            value={formData.apellidos}
                            onChange={(e) => updateField("apellidos", e.target.value)}
                            required
                            suppressHydrationWarning
                            className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl outline-none"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm">Fecha de nacimiento</label>
                        <input
                            type="date"
                            value={formData.fechaNacimiento}
                            onChange={(e) => updateField("fechaNacimiento", e.target.value)}
                            required
                            suppressHydrationWarning
                            className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl outline-none"/>
                    </div>
                </div>
            )}

            {step === 1 && (
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            required
                            suppressHydrationWarning
                            className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl outline-none"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm">Password</label>
                        <input
                            type="password"
                            value={formData.password}
                            onChange={(e) => updateField("password", e.target.value)}
                            required
                            suppressHydrationWarning
                            className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl outline-none"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm">Confirmar password</label>
                        <input
                            type="password"
                            value={formData.confirmPassword}
                            onChange={(e) => updateField("confirmPassword", e.target.value)}
                            required
                            suppressHydrationWarning
                            className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl outline-none"/>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="flex flex-col gap-2 text-sm text-neutral-600">
                    <p><strong>Nombre:</strong> {formData.nombre} {formData.apellidos}</p>
                    <p><strong>Fecha de nacimiento:</strong> {formData.fechaNacimiento}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                </div>
            )}

            <div className="flex gap-3 mt-2">
                {step > 0 && (
                    <button type="button" onClick={prevStep} suppressHydrationWarning className="flex-1 py-2.5 rounded-xl border border-neutral-300 text-sm font-semibold">
                        Atrás
                    </button>
                )}
                {step < STEPS.length - 1 ? (
                    <button type="button" onClick={nextStep} suppressHydrationWarning className="flex-1 py-2.5 rounded-xl bg-cyan-600 text-white text-sm font-semibold">
                        Siguiente
                    </button>
                ) : (
                    <button type="submit" suppressHydrationWarning className="flex-1 py-2.5 rounded-xl bg-cyan-600 text-white text-sm font-semibold">
                        Crear cuenta
                    </button>
                )}
            </div>
        </form>
    );
};

export default RegisterForm;