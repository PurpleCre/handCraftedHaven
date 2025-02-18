import { sql } from "@vercel/postgres";
import { Product } from "@/app/lib/definitions";

export async function getProducts(searchParams: { page?: string; search?: string }) {
  const pageSize = 10;
  const currentPage = Number(searchParams.page) || 1;
  const offset = (currentPage - 1) * pageSize;
  const searchQuery = searchParams.search ? `%${searchParams.search}%` : "%";

  // Fetch paginated products
  const result = await sql<Product>`
    SELECT id, product_name, description, price, images
    FROM products
    WHERE product_name ILIKE ${searchQuery}
    ORDER BY created_at DESC
    LIMIT ${pageSize} OFFSET ${offset};
  `;

  // Fetch total count (for pagination numbers)
  const countResult = await sql`SELECT COUNT(*) FROM products WHERE product_name ILIKE ${searchQuery};`;
  const totalProducts = Number(countResult.rows[0].count);

  return {
    products: result.rows.map((row) => ({
      ...row,
      images: Array.isArray(row.images) ? row.images : [],
    })),
    totalProducts,
  };
}

export async function getSingleProduct(searchParams: { productId?: string}) {
  const productId = await searchParams.productId
  const result = await sql<Product>`
    SELECT *
    FROM products
    WHERE id = ${productId}
  `;
  const product = result.rows[0]
  return product

}