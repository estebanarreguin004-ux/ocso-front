'use server'
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders"
import { revalidateTag  } from "next/cache"
import { redirect } from "next/navigation"

export default async function deleteProvider(providerId: string, formData: FormData) {
    let provider: any = {}
    for(const key of formData.keys()){
        provider[key] = formData.get(key)
    }

    const response = await fetch(`${API_URL}/providers/${providerId}`, {
        method: "DELETE",
        headers: {
            ...AuthHeaders()
        }
    })

    if(response.status == 200) {
        revalidateTag("dashboard:providers")
        redirect("/dashboard/providers")
    
    }

}