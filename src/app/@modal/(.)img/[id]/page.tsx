import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import { FullPageImageView } from "~/common/full-page-view";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const photoIdNumber = Number(photoId);
  if(Number.isNaN(photoIdNumber)) throw new Error("Invalid photo ID");
  const image = await getImage(photoIdNumber);
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
      {photoId}
    </Modal>
    
  );
}