"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  User,
  Mail,
  ShieldCheck,
  BookOpen,
  CalendarDays,
} from "lucide-react";

type UserData = {
  name: string;
  email: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [today, setToday] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("user");
      if (saved) {
        setUser(JSON.parse(saved));
      }
    } catch {
      // data rusak: abaikan, tampilkan nilai default
    }

    setToday(
      new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/auth/login");
  };

  const name = user?.name ?? "Pengguna";
  const email = user?.email ?? "-";

  return (
    <div className="min-h-screen bg-blue-50/60 p-6 md:p-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        {/* Header */}
        <header className="flex items-center justify-between rounded-lg bg-white p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
              <LayoutDashboard size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
              <p className="text-sm text-slate-500">Selamat datang kembali</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-md border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-red-400"
          >
            <LogOut size={18} />
            Keluar
          </button>
        </header>

        {/* Banner sambutan */}
        <section className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <div className="flex items-center justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-xs font-semibold">
                Sesi aktif
              </span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Halo, {name}! <span aria-hidden="true">👋</span>
              </h2>
              <p className="mt-2 text-blue-100">
                Anda telah berhasil masuk ke dashboard akun Anda.
              </p>
            </div>

            <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-white/15 sm:flex">
              <User size={40} />
            </div>
          </div>
        </section>

        {/* Tiga kartu informasi */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <User size={22} />
            </div>
            <p className="mt-4 text-sm text-slate-500">Nama lengkap</p>
            <p className="break-words text-lg font-bold text-slate-900">
              {name}
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
              <Mail size={22} />
            </div>
            <p className="mt-4 text-sm text-slate-500">Alamat email</p>
            <p className="break-all text-lg font-bold text-slate-900">
              {email}
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-purple-100 text-purple-600">
              <ShieldCheck size={22} />
            </div>
            <p className="mt-4 text-sm text-slate-500">Status akun</p>
            <p className="text-lg font-bold text-emerald-600">Terverifikasi</p>
          </div>
        </section>

        {/* Menu & akses cepat */}
        <section className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900">Menu & akses cepat</h3>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/kelas"
              className="flex items-center gap-4 rounded-lg border border-slate-100 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
                <BookOpen size={22} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Lihat halaman kelas
                </p>
                <p className="text-sm text-slate-500">
                  Buka daftar kelas dan data siswa
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-4 rounded-lg border border-slate-100 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-100 text-slate-600">
                <CalendarDays size={22} />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Tanggal sesi</p>
                <p className="text-sm text-slate-500">{today}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
