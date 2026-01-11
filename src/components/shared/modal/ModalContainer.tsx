"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ModalContainerProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children?: React.ReactNode;
}

export function ModalContainer({
  modalOpen,
  setModalOpen,
  children,
}: ModalContainerProps) {
  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[500px]">
        <VisuallyHidden>
          <DialogTitle>Mobile Navigation</DialogTitle>
        </VisuallyHidden>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
