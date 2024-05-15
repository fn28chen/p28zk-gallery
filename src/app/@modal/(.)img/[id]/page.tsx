import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdNumber = Number(photoId);
  if(Number.isNaN(photoIdNumber)) throw new Error("Invalid photo ID");
  const image = await getImage(photoIdNumber);
  return (
    // <Modal>
    //   {/* <FullPageImageView photoId={photoId} /> */}
    //   {photoId}
    // </Modal>
    <Modal>
      <h1>{image.name}</h1>
      <img src={image.url} alt={image.name} />
    </Modal>
  );
}