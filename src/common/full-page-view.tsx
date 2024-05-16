import { clerkClient } from "@clerk/nextjs/server";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Button } from "~/components/ui/button";
import { deleteImage, getImage } from "~/server/queries";

export async function FullPageImageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  const userInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-screen min-w-0 text-white justify-center">
      <Link href="/">
        <Button
          variant="outline"
          className="self-start items-start justify-start"
        >
          <FiArrowLeft size={24} />
        </Button>
      </Link>
      <div className="h-full content-center justify-center md:max-w-[768px] lg:max-w-[1024px] xl:w-full">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="flex h-full w-40 flex-shrink-0 flex-col border-l md:w-56 lg:w-72">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <div>Uploaded By:</div>
          <div>{userInfo.fullName}</div>
        </div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.createdAt.toLocaleDateString()}</div>
        </div>

        <div className="p-2">
          <form
            action={async () => {
              "use server";

              await deleteImage(idAsNumber);
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
