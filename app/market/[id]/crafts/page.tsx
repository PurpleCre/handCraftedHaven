import { Metadata } from 'next'
import ProductDetail from '@/app/ui/market/ProductDetail';
import "@/app/ui/global.css";
import "@/app/ui/market.css";
import "@/app/ui/product.css";
import { getSingleProduct } from '@/app/lib/queries';
 
export const metadata: Metadata = {
  title: 'Crafts',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const productId = params.id;
  const product = await getSingleProduct(productId);

  return (
    <>
    <h1>Product Details</h1>
    <div className='product-detail'>
      <ProductDetail productDetail = {product}/>
    </div>
    </>
  )
}

