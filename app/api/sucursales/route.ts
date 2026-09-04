import { NextResponse } from "next/server";
import { pool } from "@/lib/db"

/**
 * @swagger
 * /api/sucursales:
 *   get:
 *     summary: Obtener todas las sucursales
 *     description: Consulta la base de datos y devuelve una lista con todos los registros de la tabla sucursales.
 *     tags:
 *       - Sucursales
 *     responses:
 *       200:
 *         description: Lista de sucursales recuperada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                   nombre:
 *                     type: string
 *                     example: "Sucursal Centro"
 *                   direccion:
 *                     type: string
 *                     example: "Av. Principal 123"
 *                   estado:
 *                     type: boolean
 *                     example: true
 *       500:
 *         description: Internal Server Error. Fallo al consultar la base de datos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error al obtener las sucursales"
 */

export async function GET() {
    try {
        const response = await pool.query(`
            SELECT * FROM sucursales;
        `)

        return NextResponse.json(
            { message: "Has obtenido la información de las sucursales con éxito.", data: response.rows },
            { status: 200 }
        )

    } catch (error) {
        console.error(error)

        return NextResponse.json(
            { error: "No se pudo obtener la información de las sucursales" },
            { status: 500 }
        )
    }
}