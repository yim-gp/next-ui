'use client';

import React from "react";
import { motion } from "framer-motion";
import { Menu, Home, Settings, User, Moon, Sun } from "lucide-react";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";

export default function LayoutExample({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const { theme, setTheme } = useTheme();
    return (
        <div className="min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] text-black bg-slate-50">
            {/* Header (full width) */}
            <header className="col-span-2 flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b border-slate-200">
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
                    <h1 className="text-xl font-semibold">HeroUI Dashboard</h1>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="solid" className="text-black" size="sm" disableRipple>
                        Login
                    </Button>
                    <Button color="primary" size="sm" disableRipple>
                        Sign up
                    </Button>
                    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} disableRipple>
                        {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                    </Button>
                </div>
            </header >

            {/* Sidebar */}
            <motion.aside
                animate={{ width: sidebarOpen ? 240 : 60 }
                }
                className="bg-white border-r border-slate-200 shadow-sm overflow-hidden"
            >
                <nav className="p-2 space-y-1">
                    <SidebarItem icon={<Home />} label="Home" open={sidebarOpen} />
                    <SidebarItem icon={<User />} label="Profile" open={sidebarOpen} />
                    <SidebarItem icon={<Settings />} label="Settings" open={sidebarOpen} />
                </nav>
            </motion.aside >

            {/* Main column (content + footer together) */}
            < div className="flex flex-col min-h-0" >
                <main className="flex-1 p-4">
                    {children}
                </main>

                {/* Footer (only under main content) */}
                <footer className="bg-white border-t px-4 py-3 text-sm text-slate-500 flex items-center justify-between border-slate-200">
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

function SidebarItem({ icon, label, open }: { icon: React.ReactNode; label: string; open: boolean }) {
    return (
        <Button
            variant="light"
            className="w-full flex items-center justify-start gap-3 h-11 rounded-xl hover:bg-slate-100 transition-colors"
            startContent={<span className="-ml-1.5 w-5 h-5">{icon}</span>}
            disableRipple
        >
            {open && <span className="text-sm font-medium leading-none">{label}</span>}
        </Button>
    );
}