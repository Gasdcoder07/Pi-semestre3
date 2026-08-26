import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mensaje } = body;

    if (!mensaje) {
      return NextResponse.json({ message: "El mensaje es requerido" }, { status: 400 });
    }
    const query = `
        INSERT INTO prueba_conexion (mensaje) 
        VALUES ($1)
        RETURNING *;
    `;

    const res = await pool.query(query, [mensaje]);
    return NextResponse.json(
        { success: true, data: res.rows[0] },
        { status: 201 }
    )
  } catch (error) {
    console.error("Error al insertar el mensaje:", error);
    return NextResponse.json({ message: "Error al insertar el mensaje" }, { status: 500 });
  }
}   