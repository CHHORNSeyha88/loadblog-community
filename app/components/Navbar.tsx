import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBarComponent = async () => {
  const session = await auth();

  return (
    // use header to conver the nav
    // use nav to conver the Link
    <header className="px-2 py-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/LoadBlog.png" width={144} height={144} alt="logo.png" />
        </Link>

        {/* catch the session from GitHub */}

        <div className="flex items-center gap-5">


        {/* if have session and user please appear create and LogOut else only LogIn*/}

          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              {/* use for logout */}

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              {/* use for login */}

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>  ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
      {/* ---------------- */}
    </header>
  );
};

export default NavBarComponent;
