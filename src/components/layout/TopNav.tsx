import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { StyledHeader } from "../global/Styled";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl">
      <StyledHeader tag="h2" children="Gallery" />
      
      <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
      </div>
    </nav>
  );
}
