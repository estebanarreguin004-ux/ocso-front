'use client'
import { Product } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function FilteredCards({ products }: {products: Product[]}) {
    const [filtered, SetFiltered] = useState<string>("");
    const [productsList, SetProductsList] = useState<Product[]>(products)

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if(product.productName.toLowerCase().includes(filtered.toLowerCase())) {
                return true
            } else return false;
        })
        SetProductsList(filteredProducts)
    }, [filtered])
    
    return (
        <div className="max-h-[90vh] h-full min-h-[90vh] overflow-y-auto flex flex-col gap-5 border-r-orange-200 border-r-2 px-10 py-10 ">
        <Input onChange={(e) => {
            SetFiltered(e.target.value)}}
            label="Nombre del producto"/>
        {
            productsList.map((product: Product) => (
                <Link key={product.productId} href={`/dashboard/products/${product.productId}`}>
                    <ProductCard product={product}/>
                </Link>
        ))
        }
        </div>
        
    )


}