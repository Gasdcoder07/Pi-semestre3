import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
    try {
        const result = await pool.query('SELECT mensaje FROM prueba_conexion')
        return NextResponse.json({ data: result.rows });
    } catch (err) {
        console.error("error al hacer la consulta: ", err)
        return null
    }
}

