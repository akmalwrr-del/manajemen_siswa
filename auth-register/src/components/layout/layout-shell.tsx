"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";

const HIDE_SIDEBAR_ON = ["/auth/login", "/auth/register"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const hideSidebar = HIDE_SIDEBAR_ON.some((p) => pathname.startsWith(p));

    if (hideSidebar) {
        return <>{children}</>;
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1">
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    );
}