'use server'
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";


export default async function deleteLocation( formData: FormData ) {
    const locationId = formData.get("deleteValue") as string;
    if(!locationId) return;
    const token = await cookies().get(TOKEN_NAME)?.value;
    if(!token) return;
    await axios.delete(`${API_URL}/locations/${locationId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return;
}