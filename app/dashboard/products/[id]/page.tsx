import { API_URL } from "@/constants";
import ProductCard from "../_components/ProductCard";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Product, Provider } from "@/entities";
import UpdateProduct from "./_components/UpdateProduct";
import DeleteProduct from "../_components/DeleteProduct";

export default async function ProductPage({params}: {params: {id: string}}) {
    const responseProduct = await fetch(`${API_URL}/products/${params.id}`, {
        headers: {
            ...await AuthHeaders()
        }, 
        next: {
            tags: [`dashboard:products:${params.id}`]
        }
    })
    const product: Product = await responseProduct.json()

    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...await AuthHeaders()
        }
    })
    const providers: Provider[] = await responseProviders.json()


    return (
        <div className="flex flex-col items-center w-full gap-2">
        <ProductCard product={product} />
        <UpdateProduct providers={providers} product={product}/>
        <DeleteProduct productId={product.productId}/>
        </div>
        
    )
}