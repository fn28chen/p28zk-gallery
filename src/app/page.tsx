import Image from "next/image";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  console.log(images);

  return (
    <div className="m-4 grid lg:max-w-[1536px] xl:w-full grid-cols-12 gap-1">
      {images.map((image) => (
        <div
          key={image.id}
          className="col-span-6 md:col-span-3 lg:col-span-2 max-h-48 max-w-64 overflow-hidden"
        >
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              title={image.name}
              style={{ objectFit: "contain" }}
              width={256}
              height={192}
              alt={image.name}
            />
          </Link>
        </div>
      ))}
    </div>
  );
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
