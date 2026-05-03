'use server'

import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
export default async function updateUser(userId: string, formData: FormData){
    let data: any = {}
    data.userEmail = formData.get("userEmail") ? formData.get("userEmail") : undefined;
    data.userPassword = formData.get("userPassword")  ? formData.get("userPassword") : undefined;

    const response = await fetch(`${API_URL}/auth/register/${userId}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                ...AuthHeaders()
            }, 
            body: JSON.stringify(data)
        })

}