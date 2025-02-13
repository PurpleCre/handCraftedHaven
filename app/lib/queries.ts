import { sql } from '@vercel/postgres';
import { Product } from '@/app/lib/definitions';

export async function getProducts(): Promise<Product[]> {
  const result = await sql<Product>`SELECT id, product_name, description, price, images FROM products;`;

  return result.rows.map((row) => ({
    ...row,
    images: Array.isArray(row.images) ? row.images : [], // Ensure images is always an array
  }));
}
