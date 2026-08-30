import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    try {
        const { correo, password } = await request.json()

        if (!correo || !password) {
            return NextResponse.json(
                { error: "Error, hace faltan datos para poder entrar ( Usuario, Contraseña )" },
                { status: 400 }
            )
        }

        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
            email: correo,
            password: password
        })

        if (authError || !authData) {
            return NextResponse.json(
                { error: "Correo o contraseña incorrectos" },
                { status: 401 }
            )
        }

        const { data: perfilUsuario, error: perfilError } = await supabase
            .from('usuarios')
            .select('id, nombre, correo, rol_id, sucursal_id, estado')
            .eq('auth_user_id', authData.user.id)
            .single();

        if (perfilError || !perfilUsuario) {
            return NextResponse.json(
                { error: 'No se encontró el perfil en la base de datos' },
                { status: 404 }
            )
        }

        if (!perfilUsuario.estado) {
            return NextResponse.json(
                { error: "La cuenta del usuario está inactiva" },
                { status: 403 }
            )
        }

        return NextResponse.json(
            {
                message: 'Login exitoso',
                session: authData.session,
                usuario: perfilUsuario
            }, { 
                status: 200 
            }
        )

    } catch(err) {
        console.error('Error en el endpoint de login: ', err)
        return NextResponse.json(
            { error: `Error interno del servidor: ${err}`, status: 500 }
        )
    }
}