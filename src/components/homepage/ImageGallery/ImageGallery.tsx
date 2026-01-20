"use client";

import MainContainer from "@/components/container/MainContainer";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import { IGalleryItem } from "@/types/generalType/iamgeGellery";
import Image from "next/image";
import Link from "next/link";

export default function ImageGallery({ images }: { images: IGalleryItem[] }) {
  return (
    <section className="bg-white py-5 overflow-hidden">
      <MainContainer>
        <div className="overflow-hidden space-y-5">
          <HeadingOne text="ছবি গ্যালারি" className="text-center" />

          <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
            {images.slice(0, 4).map((item, index) => (
              <div
                key={item.id}
                className="relative w-full aspect-square overflow-hidden rounded-md"
              >
                <Image
                  className="w-full h-full object-cover rounded-md"
                  src={item.url}
                  alt="img"
                  width={500}
                  height={500}
                />

                {images.length > 4 && index === 3 && (
                  <Link
                    href="/images-gallery"
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 text-white rounded-md"
                  >
                    <span className="md:text-xl text-[20px] font-semibold">
                      View All
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
