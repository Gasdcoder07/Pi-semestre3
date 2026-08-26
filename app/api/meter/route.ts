import { pool } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST() {
    try {
        const response = pool.query("INSERT INTO prueba_conexion(mensaje)VALUES('hola')")
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}