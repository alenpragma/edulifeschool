"use client";

import MainContainer from "@/components/container/MainContainer";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import { IGalleryItem } from "@/types/generalType/iamgeGellery";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageGallery({ images }: { images: IGalleryItem[] }) {
  const marqueeImages = [...images, ...images];

  return (
    <section className="bg-white py-5 overflow-hidden">
      <MainContainer className="space-y-5 overflow-hidden">
        <HeadingOne text="ছবি গ্যালারি" className="text-center" />
        <motion.div
          className="flex gap-5"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          {marqueeImages.map((item, index) => (
            <div
              key={`top-${item.id}-${index}`}
              className="min-w-[300px] h-[200px]"
            >
              <Image
                className="w-full h-full object-cover rounded-md"
                src={item.url}
                alt="img"
                width={500}
                height={500}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          {marqueeImages.map((item, index) => (
            <div
              key={`bottom-${item.id}-${index}`}
              className="min-w-[300px] h-[200px]"
            >
              <Image
                className="w-full h-full object-cover rounded-md"
                src={item.url}
                alt="img"
                width={500}
                height={500}
              />
            </div>
          ))}
        </motion.div>
      </MainContainer>
    </section>
  );
}
