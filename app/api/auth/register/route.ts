import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { nombre, correo, password, rol_id, sucursal_id } = body;

        if (!nombre || !correo || !password || !rol_id){
            return NextResponse.json(
                { error: 'Faltan campos obligatorios (nombre, correo, password, rol_id)' },
                { status: 400 }
            )
        }

        const { data, error } = await supabase.auth.signUp({
            email: correo,
            password: password,
            options: {
                data: {
                    nombre: nombre,
                    rol_id: rol_id,
                    sucursal_id: sucursal_id ? sucursal_id.toString() : '',
                }
            }
        })

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 })
        }

        return NextResponse.json(
            { message: 'Usuario registrado exitosamente', user: data.user },
            { status: 201 }
        )

    } catch (err) {
        console.error("Ha ocurrido un error, el cual es: ", err)
        return NextResponse.json( { errror: "Error interno del servidor" }, { status: 500 } )
    }
}