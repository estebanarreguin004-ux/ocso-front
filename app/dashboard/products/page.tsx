
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Input, Button } from "@nextui-org/react";
import { LuDollarSign } from "react-icons/lu";
import SelectProvider from "./_components/SelectProvider";
import createProduct from "@/actions/products/create";

const ProductsPage = async () => { 
    const responseProviders = await fetch(`${API_URL}/providers`, {
        headers: {
            ...await AuthHeaders()
        }
    })
    const providers = await responseProviders.json()

    return (
        <form className="flex flex-col  w-7/12 items-center gap-5 bg-orange-300 rounded-lg py-5 px-10" action={createProduct}>
        <h1 className="text-2xl font-bold text-white">Crear producto</h1>
        <Input 
                label="Nombre" 
                placeholder="Gansito" 
                name="productName" 
                isRequired 
            />
            
            <Input 
                endContent={<LuDollarSign size={20}/>} 
                label="Precio" 
                placeholder="15.50" 
                name="price" 
                type="number"
                isRequired
            />
            
            <Input 
                label="Número de sellos" 
                placeholder="2" 
                name="countSeal" 
                type="number"
                isRequired
            />
        <SelectProvider providers={providers} defaultProvider={providers}/>
        <Button type="submit">Crear</Button>
        </form>
    )
}

export default  ProductsPage;