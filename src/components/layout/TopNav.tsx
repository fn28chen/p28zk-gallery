"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { StyledHeader } from "../global/Styled";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SimpleUploadButton } from "../ui/upload-button";
import { useTheme } from "next-themes";

import { FiMoon, FiSun } from "react-icons/fi";

export default function TopNav() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl">
      <Link href="/">
        <StyledHeader tag="h2" children="Gallery" />
      </Link>

      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
          <button
            className="flex w-full items-center justify-center rounded bg-zinc-700 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:shadow-xl dark:bg-zinc-800 dark:hover:bg-zinc-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="p-2 text-zinc-100">
              {theme === "dark" ? <FiMoon /> : <FiSun />}
            </div>
          </button>
        </SignedOut>
        <SignedIn>
          <button
            className="flex w-full items-center justify-center rounded bg-zinc-700 shadow duration-300 ease-in-out hover:scale-110 hover:bg-zinc-800 hover:shadow-xl dark:bg-zinc-800 dark:hover:bg-zinc-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className="p-2 text-zinc-100">
              {theme === "dark" ? <FiMoon /> : <FiSun />}
            </div>
          </button>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
