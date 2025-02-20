import { sql } from "@vercel/postgres";
import { Product } from "@/app/lib/definitions";


export async function getProducts(params?: { page?: string; search?: string }) {
  const pageSize = 10;
  const currentPage = Number(params?.page) || 1;
  const offset = (currentPage - 1) * pageSize;
  const searchQuery = params?.search ? `%${params?.search}%` : "%";

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

export async function getSingleProduct(productId?: string) {
  const result = await sql<Product>`
    SELECT *
    FROM products
    WHERE id = ${productId}
  `;
  const product = result.rows[0]
  return product

}

export async function getReviews(productId: string) {

  interface Review {
    rating: number;
    comment: string;
    full_name: string;
  }

  if (!productId) {
    throw new Error("Product ID is required");
  }

  const result = await sql`
    SELECT r.rating, r.comment, u.full_name
    FROM reviews r
    INNER JOIN users u ON r.user_id = u.id
    WHERE r.product_id = ${productId};
  `;
  console.log('result:', result.rows)
  return result.rows.length > 0 ? (result.rows as Review[]) : [];
}