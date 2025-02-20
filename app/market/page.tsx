import { getProducts } from "@/app/lib/queries";
// import { Product } from "@/app/lib/definitions";
import ProductCard from "@/app/ui/market/ProductCard";
import Search from "@/app/ui/market/Search";
import "@/app/ui/market.css";
import "@/app/ui/pagination.css";
import Link from "next/link";

export default async function Page(props: { searchParams?: Promise<{ page?: string; search?: string }> }) {
  const params = await props.searchParams;
  const pageSize = 10;
  const currentPage = Number(params?.page) || 1;
  // Fetch products and total count
  const { products, totalProducts } = await getProducts(params);

  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <>
      <h1>Marketplace</h1>
      <Search />
      <div className="items">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {currentPage > 1 && <a href={`?page=${currentPage - 1}`}>Previous</a>}
        
        {/* Numbered page links */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <a
            key={page}
            href={`?page=${page}`}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </a>
        ))}

        {currentPage < totalPages && <a href={`?page=${currentPage + 1}`}>Next</a>}
      </div>
      <div className="buttons market">
          <Link href="/market/create">Add a Product</Link>
      </div>
    </>
  );
}
