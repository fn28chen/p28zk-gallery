"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { StyledHeader } from "../global/Styled";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl">
      <StyledHeader tag="h2" children="Gallery" />

      <div className="flex flex-row gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
            className="mt-4 ut-button:bg-blue-500 ut:button:ut-readying:bg-blue-500/50 text-sm"
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
