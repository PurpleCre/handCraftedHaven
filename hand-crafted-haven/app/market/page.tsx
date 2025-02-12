import { getProducts } from "@/app/lib/queries";
import { Product } from "@/app/lib/definitions";
import ProductCard from "@/app/ui/market/ProductCard";
import "@/app/ui/market.css";

export default async function Page() {
  const products: Product[] = await getProducts();

  return (
    <>
      <h1>Marketplace</h1>
      <div className="items">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
