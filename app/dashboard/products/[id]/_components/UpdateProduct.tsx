import updateProduct from "@/actions/products/update";
import { Product, Provider } from "@/entities";
import { Input, Button } from "@nextui-org/react";
import SelectProvider from "../../_components/SelectProvider";
import DeleteProduct from "../../_components/DeleteProduct";
import { LuCheck } from "react-icons/lu";

export default function UpdateProduct({product, providers}: {product: Product, providers: Provider[]}) {
    const productId = product.productId
    const updateProductById = updateProduct.bind(null, productId)

    return (
        <form action={updateProductById} className="p-10 flex flex-col gap-5 w-5/12 items-center" >
            <Input name="productName" label="Nombre" defaultValue={product.productName}/>
            <Input name="countSeal" label="Num. de sellos" defaultValue={String(product.countSeal)}/>
            <Input name="price" label="Precio" defaultValue={String(product.price)}/>
            <SelectProvider providers={providers} defaultProvider={product.provider?.providerId}/>                
            <Button type="submit" color="primary"><LuCheck size={20}/></Button>     
        </form>
    )
}