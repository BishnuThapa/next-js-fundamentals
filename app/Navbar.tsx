"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data: session } = useSession();
  return (
    <>
      <div className="flex w-full bg-slate-900 text-white gap-5 p-5 py-4">
        <Link className="mr-5" href="/">
          Home
        </Link>
        <Link className="mr-5" href="/users">
          Users
        </Link>
        <Link className="mr-5" href="/products">
          Products
        </Link>
        <Link className="mr-5" href="/admin">
          Admin
        </Link>
        {status === "loading" && <span>Loading...</span>}
        {status === "unauthenticated" && (
          <Link className="mr-5" href="/api/auth/signin">
            Sign in
          </Link>
        )}
        {status === "authenticated" && (
          <span className="mr-5">{session.user?.email}</span>
        )}
      </div>
    </>
  );
};

export default Navbar;
