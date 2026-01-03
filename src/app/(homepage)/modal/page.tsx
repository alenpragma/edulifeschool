"use client";

import { ModalContainer } from "@/components/shared/modal/ModalContainer";
import { useState } from "react";

export default function page() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div>
      <ModalContainer modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div>
          <h3>Hello World</h3>
        </div>
      </ModalContainer>
    </div>
  );
}
