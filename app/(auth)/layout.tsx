'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css';

const NavLinks = [
    {
        pageName: 'Register',
        pageUrl: '/register'
    },
    {
        pageName: 'Login',
        pageUrl: '/login'
    },
    {
        pageName: 'Forgot Password',
        pageUrl: '/forgot-password'
    }
];


export default function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    const pathName = usePathname();
    return (
        <>
        <nav>
            {
                NavLinks.map((link, index)=>{
                    const isActive = pathName === link.pageUrl || (pathName.startsWith(link.pageUrl)) && (link.pageUrl !== '/')
                    return (
                        <Link className={isActive ? 'current' : ''} href={link.pageUrl} key={index}>{link.pageName}</Link>
                    )
                })
            }
        </nav>    
        {children}
        </>
      
    );
  }