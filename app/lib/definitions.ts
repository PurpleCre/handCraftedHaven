export type User = {
    id: string;
    password_hash: string;
    username: string;
    full_name: string;
    email: string;
    role: string;
};
export type Product = {
    id: string;
    product_name: string;
    description: string;
    price: number;
    images: string[];
  };
  