
export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    // <Modal>
    //   {/* <FullPageImageView photoId={photoId} /> */}
    //   {photoId}
    // </Modal>
    <div>{photoId}</div>
  );
}