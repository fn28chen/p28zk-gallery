import Image from "next/image";
import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="max-h-48 w-48 p-4">
            <Image src={image.url} alt="alt" width={150} height={150} />
          </div>
        ))}
      </div>
    </main>
  );
}
