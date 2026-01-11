"use client";

import MainContainer from "@/components/container/MainContainer";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import { ModalContainer } from "@/components/shared/modal/ModalContainer";
import { IGalleryItem } from "@/types/generalType/iamgeGellery";
import Image from "next/image";
import { useState } from "react";

const ImageModal = ({
  modalOpen,
  setModalOpen,
  image,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  image: string | null;
}) => {
  return (
    <ModalContainer modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="p-3 w-full aspect-square overflow-hidden">
        {image && (
          <Image
            src={image}
            alt="Selected image"
            width={900}
            height={900}
            className="w-full h-auto rounded-md"
            loader={({ src }) => src}
          />
        )}
      </div>
    </ModalContainer>
  );
};

export default function ImagesGallery({ images }: { images: IGalleryItem[] }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {modalOpen && (
        <ImageModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          image={selectedImage}
        />
      )}

      <section className="pt-20 pb-5">
        <MainContainer>
          <div className="mb-8">
            <HeadingOne text="Images Gallery" />
          </div>

          <div className="grid md:grid-cols-5 grid-cols-3 gap-5">
            {images.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedImage(item.url);
                  setModalOpen(true);
                }}
                className="block"
              >
                <Image
                  className="rounded-md hover:scale-105 duration-300 w-full aspect-square object-cover"
                  src={item.url}
                  alt="img"
                  width={500}
                  height={500}
                  loader={({ src }) => src}
                />
              </button>
            ))}
          </div>
        </MainContainer>
      </section>
    </>
  );
}
