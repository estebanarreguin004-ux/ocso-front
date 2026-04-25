import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders"
import ProviderCard from "../_components/ProviderCard"
import { Product, Provider } from "@/entities"
import ProductCard from "./_components/ProductCard"
import Link from "next/link"
import FormUpdateProvider from "./_components/FromUpdateProvider"

export default async function ProviderPage({params}: {params: {id: string}}) {
    const provider: Provider = await (await fetch(`${API_URL}/providers/${params.id}`, {
        headers: {
            ...await AuthHeaders()
        },
        next:{
            tags: [`dashboard:providers:${params.id}`]
        }
    })).json()
    return (
        <div className="flex flex-col h-[90vh] gap-10 px-10 py-10">
            <div className="flex flex-row">
            <ProviderCard provider={provider}/>
            <FormUpdateProvider provider={provider}/>
            </div>
            
            <div className="h-1 bg-black w-[90vw]" />
            <div className="flex flex-wrap gap-10 w-[80vw]">
            {
                provider.products.map((product: Product) => 
                (<Link className="hover:scale-110 transition-all" key={product.productId} href={`/dashboard/products/${product.productId}`}>
                <ProductCard  product={product} />
                </Link>)
                )
            }
            </div>
            
        </div>
    )
}