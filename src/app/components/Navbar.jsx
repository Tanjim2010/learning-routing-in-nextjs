"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    const isDashboard = currentPath.includes("/dashboard");

    if (isDashboard) return <></>;

    return (
        <div>
            <ul className="flex justify-around font-semibold py-2">
                <li><Link href="/">home</Link></li>
                <li><Link href="/posts">posts</Link></li>
                <li><Link href="/meals">meals</Link></li>
                <li><Link href="/products/add">Add Products</Link></li>
                <li><Link href="/products">Products</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
