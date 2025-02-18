import { Metadata } from 'next';
import {getSingleProduct} from "@/app/lib/queries";
import ProductDetail from '@/app/ui/market/ProductDetail';
import "@/app/ui/global.css";
import "@/app/ui/market.css";
import "@/app/ui/product.css";
 
export const metadata: Metadata = {
  title: 'Crafts',
};

export default async function Page({ searchParams }: { searchParams: { productId?: string}}) {
  const params = await searchParams
  const product = await getSingleProduct(params)

  return (
    <>
    <h1>Product Details</h1>
    <div className='product-detail'>
      <ProductDetail product = {product} />
    </div>
    </>
  )
}

