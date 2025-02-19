"use client"; 
import { useState } from "react";
import { Product } from "@/app/lib/definitions";
import Image from "next/image";

export default function ProductDetail({ product }: { product: Product }) {
    const [currentImage, setCurrentImage] = useState(0);
    const images = product.images || [];
  
    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return(
      <div className="product-detail-layout">
            <div className="image-gallery">
                {images.length > 0 ? (
                <>
                    <button onClick={prevImage}>&lt;</button>
                    <Image src={images[currentImage]} alt={product.product_name} width={380} height={0} style={{height: 'auto' }} />
                    <button onClick={nextImage}>&gt;</button>
                </>
                ) : (
                <p>No images available</p>
                )}
            </div>
            <div className="product-detail-info">
                <h2>{product.product_name}</h2>
                <p>{product.description}</p>
                <hr />
                <p className="product-detail-price">${product.price}</p>
            </div>
      </div>
    )
}
