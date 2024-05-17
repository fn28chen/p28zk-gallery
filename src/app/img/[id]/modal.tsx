"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { Button } from "~/components/ui/button";
import { IoMdClose } from "react-icons/io";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <dialog
      ref={dialogRef}
      className="relative h-full w-full bg-black/80 p-4"
      onClose={onDismiss}
    >
      <Button
        variant="outline"
        onClick={onDismiss}
        className="absolute right-0 top-0 m-4"
      >
        <IoMdClose />
      </Button>
      {children}
    </dialog>
  );
}
