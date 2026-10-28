import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import LayoutShell from "@/components/layout/layout-shell";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Manajemen Siswa",
  description: "Aplikasi manajemen siswa untuk kelas industri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}