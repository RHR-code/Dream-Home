import Link from "next/link";
import React from "react";
import { links } from "./Links";
import NavLink from "./NavLink";
import { cookies } from "next/headers";
import Logout from "./Logout";
const Navbar = async () => {
  const cookieStore = await cookies();
  const loggedIn = cookieStore.has("login");
  console.log(loggedIn);

  const links = (
    <>
      <li>
        {" "}
        <NavLink href={"/"}>Home</NavLink>{" "}
      </li>
      <li>
        <NavLink href={"/all-homes"}>All Homes</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {/* {links} */}
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">
            <span className="text-primary -mr-2">Dream</span>Homes
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5">
          {loggedIn ? (
            <Logout />
          ) : (
            <>
              <Link
                href={"/login"}
                className="btn btn-primary hover:scale-105 transition-transform ease-in-out duration-150 "
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
