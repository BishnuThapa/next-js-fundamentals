import Link from "next/link";
import React from "react";

const Navbar = () => {
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
        <Link className="mr-5" href="/api/auth/signin">
          Sign in
        </Link>
      </div>
    </>
  );
};

export default Navbar;
