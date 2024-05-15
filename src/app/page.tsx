import Image from "next/image";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  console.log(images);

  return (
    <div className="m-4 grid max-w-[1024px] grid-cols-12 gap-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="col-span-3 max-h-48 max-w-48 overflow-hidden"
        >
          <Image
            src={image.url}
            title={image.name}
            alt="alt"
            width={192}
            height={192}
            className="group object-cover"
          />
        </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Sign In before upload things!
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
