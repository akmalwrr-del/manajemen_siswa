import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        if (!name || !email || !password) {
            return NextResponse.json(
                { success: false, message: "Data tidak lengkap" },
                { status: 400 }
            );
        }

        // TODO: simpan user ke database di sini (hash password dulu, mis. bcrypt)

        return NextResponse.json({
            success: true,
            message: "Registrasi berhasil",
        });
    } catch {
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}