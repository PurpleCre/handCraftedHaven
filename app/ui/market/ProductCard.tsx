"use client"; // Mark this as a client component

import { useState } from "react";
import { Product } from "@/app/lib/definitions";

export default function ProductCard({ product }: { product: Product }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = product.images || [];
  const url = "/market/crafts?productId=" + product.id;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="item">
      <a href={url}>
        <h2>{product.product_name}</h2>
        <p>{product.description}</p>
      </a>
      <div className="image-gallery">
        {images.length > 0 ? (
          <>
            <button onClick={prevImage}>&lt;</button>
            <img src={images[currentImage]} alt={product.product_name} />
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
