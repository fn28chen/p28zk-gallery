import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {
      desc
    }) => desc(model.id),
  });
  console.log(images);
  return (
    <div className="grid max-w-[1200px] grid-cols-12 gap-4 m-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="col-span-3 max-h-32 max-w-32">
          {image.name}
          <Image src={image.url} alt="alt" width={128} height={128} />
        </div>
      ))}
    </div>
  );
}
