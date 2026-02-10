'use client';

import React from "react";
import { motion } from "framer-motion";
import { Menu, Home, Settings, User, Moon, Sun, LayoutGrid } from "lucide-react";
import { BreadcrumbItem, Breadcrumbs, Button } from "@heroui/react";
import { useTheme } from "@/hook/useTheme";
import { useRouter, usePathname } from "next/navigation";

export default function LayoutExample({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const { theme, toggleTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const path = pathname.split('/').filter((text) => text.length > 0) || '/';
    console.log(path);
    return (
        <div className="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]  ">
            {/* Header (full width) */}
            <header className="col-span-2 flex items-center justify-between px-4 py-3  shadow-sm border-b dark:border-slate-700 border-slate-200">
                <div className="flex items-center gap-2">
                    <Button
                        isIconOnly
                        variant="light"
                        onPress={() => setSidebarOpen(!sidebarOpen)}
                        className="w-10"
                        disableRipple
                    >
                        <Menu className="w-8 h-8" />
                    </Button>
                    <div className="flex flex-row gap-10">
                        <h1 className="text-xl font-semibold">HeroUI Dashboard</h1>
                        <Breadcrumbs>
                            {path.length > 1 && path.map((segment, index) => (
                                <BreadcrumbItem className={path.length - 1 === index ? "text-xl font-bold underline" : ""} key={index}>{segment}</BreadcrumbItem>
                            ))}
                        </Breadcrumbs>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="solid" size="sm" disableRipple>
                        Login
                    </Button>
                    <Button color="primary" size="sm" disableRipple>
                        Sign up
                    </Button>
                    <Button
                        onClick={toggleTheme}
                        className="px-4 py-2 rounded  border border-default-300 dark:border-stone-800 dark:bg-zinc-950 text-black dark:text-white"
                    >
                        {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </Button>
                </div>
            </header >

            {/* Sidebar */}
            <motion.aside
                animate={{ width: sidebarOpen ? 240 : 60 }
                }
                className=" border-r dark:border-slate-700 border-slate-200 shadow-sm overflow-hidden"
            >
                <nav className="p-2 space-y-1">
                    <SidebarItem icon={<Home className="dark:hover:text-slate-100" />} label="Home" open={sidebarOpen} onClick={()=>{ router.push('/')}} />
                    <SidebarItem icon={<LayoutGrid className="dark:hover:text-slate-100" />} label="Components" onClick={() => { router.push('/components') }} open={sidebarOpen} />
                    <SidebarItem icon={<Settings className="dark:hover:text-slate-100" />} label="Settings" open={sidebarOpen} />
                </nav>
            </motion.aside >

            {/* Main column (content + footer together) */}
            < div className="flex flex-col min-h-0" >
                <main className="flex-1 p-4">
                    {children}
                </main>

                {/* Footer (only under main content) */}
                <footer className=" border-t px-4 py-3 text-sm text-slate-500 flex items-center justify-between dark:border-slate-700 border-slate-200">
                    <span>© {new Date().getFullYear()} HeroUI Dashboard</span>
                    <div className="flex items-center gap-4">
                        <a className="hover:underline" href="#">Privacy</a>
                        <a className="hover:underline" href="#">Terms</a>
                        <a className="hover:underline" href="#">Contact</a>
                    </div>
                </footer>
            </div >
        </div >
    );
}

function SidebarItem({ icon, label, open, onClick }: { icon: React.ReactNode; label: string; open: boolean; onClick?: () => void }) {
    return (
        <Button
            onClick={onClick}
            disableRipple
            variant="light"
            className="
    w-full flex items-center justify-start gap-3 h-11 rounded-xl
    hover:bg-slate-100 dark:hover:bg-slate-900
    group"
            startContent={
                <span className="flex items-center w-5 h-5 -ml-1.5 text-slate-600 dark:text-slate-300 group-hover:text-black dark:group-hover:text-white">
                    {icon}
                </span>
            }
        >
            {open && <span className="text-sm font-medium leading-none">{label}</span>}
        </Button>
    );
}