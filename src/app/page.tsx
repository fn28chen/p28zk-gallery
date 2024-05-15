import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/1d54db99-c0dc-49fd-b5ae-f1b51fad61f2-p0obbf.jpg",
  "https://utfs.io/f/2ace6c9a-4825-46df-b4b8-ca3e352e9271-a6bu22.png",
  "https://utfs.io/f/12f880a0-7004-4daa-8f1b-ffc3ba06c7bb-1axopr.png",
  "https://utfs.io/f/8e2d9df0-eb8f-469e-85d3-9eeb7324f36d-1fytv.js.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <div className="grid max-w-[1200px] grid-cols-12 gap-4 m-4">
      {posts.map((post) => (
        <div key={post.id} className="col-span-3 max-h-32 max-w-32">
          {post.name}
        </div>
      
      ))}
      {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + "-" + index} className="col-span-3 max-h-32 max-w-32">
          <Image src={image.url} alt="alt" width={128} height={128} />
        </div>
      ))}
    </div>
  );
}
