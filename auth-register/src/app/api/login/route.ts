import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { success: false, message: "Email dan password wajib diisi" },
                { status: 400 }
            );
        }

        // TODO: cari user di database, bandingkan password dengan bcrypt.compare

        return NextResponse.json({
            success: true,
            message: "Login berhasil",
            user: {
                name: email.split("@")[0],   // sementara: ambil dari bagian depan email
                email,
            },
        });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}