'use server'
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders"
import { revalidateTag  } from "next/cache"
import { redirect } from "next/navigation"

export default async function updateProvider(providerId: string, formData: FormData) {
    let provider: any = {}
        for(const key of formData.keys()){
            const value = formData.get(key);
            if (value && value.toString().trim() !== "") {
                provider[key] = value;
            }
        }

        if (Object.keys(provider).length === 0) return;
    
        const response = await fetch(`${API_URL}/providers/${providerId}`, {
            method: "PATCH",
            body: JSON.stringify(provider),
            headers: {
                ...await AuthHeaders(),
                'content-type': 'application/json'
            }
        })
    
        if (response.status === 200) {
            revalidateTag("dashboard:providers")
            redirect(`/dashboard/providers/${providerId}`) 
        } else {
            const errorData = await response.json();
            console.error("Error al actualizar proveedor:", errorData);
        }

}