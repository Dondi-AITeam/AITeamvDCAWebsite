'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';
import { clsx } from 'clsx';
import { LayoutDashboard, GraduationCap, Briefcase, Settings, LogOut } from 'lucide-react';

const links = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/courses', label: 'Courses', icon: GraduationCap },
    { href: '/dashboard/jobs', label: 'Jobs', icon: Briefcase },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <div className={styles.logo}>aiTeam.ph</div>
            </div>
            <nav className={styles.nav}>
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(styles.link, isActive && styles.active)}
                        >
                            <Icon size={20} />
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
            <div className={styles.footer}>
                <button className={styles.logout}>
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
}
