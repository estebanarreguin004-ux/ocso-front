
'use server'
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders"
import { revalidateTag  } from "next/cache"
import { redirect } from "next/navigation"

export default async function deleteProducts(productId: string, formData: FormData) {
    let product: any = {}
    for(const key of formData.keys()){
        product[key] = formData.get(key)
    }

    const response = await fetch(`${API_URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
            ...await AuthHeaders()
        }
    })

    if(response.status == 200 || response.status == 204) {
        revalidateTag("dashboard:products")
        redirect("/dashboard/products")
    }
}