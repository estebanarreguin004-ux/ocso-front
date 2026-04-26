
'use server'

import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders"
import { revalidateTag  } from "next/cache"
import { redirect } from "next/navigation"

export default async function createProduct(formData: FormData) {
    let product: any = {}
    for(const key of formData.keys()){
        if(!key.includes("$ACTION_ID")) {
            product[key] = formData.get(key)
        }
    }
    product.price = +product.price
    product.countSeal = +product.countSeal

    const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
            ...await AuthHeaders(),
            'content-type': 'application/json'
        }
    })

    if (response.status === 201) {
        revalidateTag("dashboard:products")
        redirect("/dashboard/products") 
    } else {
        const errorData = await response.json();
        console.error("Error al crear producto:", errorData);
    }
}