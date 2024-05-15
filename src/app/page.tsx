import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);
  return (
    <div className="m-4 grid max-w-[1024px] grid-cols-12 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id + "-" + index}
          className="col-span-3 max-h-64 max-w-64 overflow-hidden"
        >
          <Image
            src={image.url}
            title={image.name}
            alt="alt"
            width={256}
            height={256}
            className="group object-cover"
          />
        </div>
      ))}
    </div>
  );
}
