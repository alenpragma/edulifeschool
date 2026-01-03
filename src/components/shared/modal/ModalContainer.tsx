"use client";

import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";

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
      <DialogContent className="sm:max-w-[425px]">
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
