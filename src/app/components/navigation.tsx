"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <nav>
            <Link href="/"
                className={
                    pathname === "/" ? "font-bold mr-4" : "mr-4 text-blue-500"}>Home</Link>
            <Link href="/product/one" className={
                pathname.startsWith("/product/one") ? "font-bold mr-4" : "mr-4 text-blue-500"}>Product One</Link>
            <Link href="/about" className={
                pathname === "/about" ? "font-bold mr-4" : "mr-4 text-blue-500"}>About</Link>

            <SignedOut>
                <SignInButton mode="modal" />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>

        </nav>
    )
}