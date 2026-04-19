'use server'
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export default async function deleteLocation( formData: FormData ) {
    const locationId = formData.get("deleteValue") as string;
    if(!locationId) return;
    const response = await fetch(`${API_URL}/locations/${locationId}`, {
        method: "DELETE",
        headers: {
            ...await AuthHeaders()
        }
    });
    revalidateTag('dashboard:locations');
    redirect('/dashboard');
}