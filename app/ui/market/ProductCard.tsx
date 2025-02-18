"use client"; // Mark this as a client component

import { useState } from "react";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = product.images || [];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="item">
      <h2>{product.product_name}</h2>
      <p>{product.description}</p>
      <div className="image-gallery">
        {images.length > 0 ? (
          <>
            <button onClick={prevImage}>&lt;</button>
            <Image src={images[currentImage]} alt={product.product_name} width={200} height={180} />
            <button onClick={nextImage}>&gt;</button>
          </>
        ) : (
          <p>No images available</p>
        )}
      </div>
      <p>${product.price}</p>
    </div>
  );
}
