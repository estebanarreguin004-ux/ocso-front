'use client'
import { Product, Provider } from "@/entities";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function FilteredCards({ products, providers }: {products: Product[], providers: Provider[]}) {
    const [filtered, SetFiltered] = useState<string>("");
    const [provider, SetProvider] = useState<string>();
    const [productsList, SetProductsList] = useState<Product[]>(products)
    const [show, setShow] = useState(false);

    useEffect(() => {
        const filteredProducts = products.filter((product) => {
            if(product.productName.toLowerCase().includes(filtered.toLowerCase()) && product.provider.providerId == provider) {
                return true
            } else return false;
        })
        SetProductsList(filteredProducts);
        setShow(true);
    }, [filtered, provider, products])
    
    return (
        <div className="max-h-[90vh] h-full min-h-[90vh] overflow-y-auto flex flex-col gap-5 border-r-orange-200 border-r-2 px-10 py-10 ">
        
        <Select label="Proveedor"
        selectedKeys={provider ? [provider] : []}
        onChange={(e) => SetProvider(e.target.value)}>
            
            {providers.map((provider: Provider)=> 
                (<SelectItem key={provider.providerId}>
                    {provider.providerName}
                </SelectItem>) 
            )}
        </Select>
        <Input onChange={(e) => {
            SetFiltered(e.target.value)}}
            label="Nombre del producto"/>
        {
            show && productsList.map((product: Product) => (
                <Link key={product.productId} href={`/dashboard/products/${product.productId}`}>
                    <ProductCard product={product}/>
                </Link>
        ))
        }
        </div>
        
    )
}