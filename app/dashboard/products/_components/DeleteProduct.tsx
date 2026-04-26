import { LuTrash } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import deleteProducts from "@/actions/products/delete";

export default function DeleteProduct({productId}: {productId: string}) {
    const deleteProductById = deleteProducts.bind(null, productId)
    return (
        <form action={deleteProductById}>
            <Button color="danger" type="submit"> <LuTrash size={20}/></Button>
        </form>
    )

}