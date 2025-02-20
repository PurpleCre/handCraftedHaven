"use client"

import ProductCard from "../market/ProductCard"
// import { useSession } from "next-auth/react"
import { Product, User } from "@/app/lib/definitions";


export default function UserProfile(params : {products: Product[], user: User}){
    // const { data: session, status } = useSession();
    // const userId = session?.user?.id;
    const products = params.products;
    const user = params.user;

    return (
        <>
            <h1>{user.username}s Products</h1>
            <div className="items">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="add-product-button">
                <a href="/market/create">Add New Product</a>
            </div>
        </>
    )
}