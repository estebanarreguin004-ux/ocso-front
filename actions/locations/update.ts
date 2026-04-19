

'use server';
import { API_URL, TOKEN_NAME } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateLocation(store: string, formData: FormData) {
    const token = cookies().get(TOKEN_NAME)?.value;
    if(!token) return;
    let location :any = {};
    let locationLatLng: number[] = [];
    for (const key of formData.keys()) {
        const value = formData.get(key);

        if(value) {
            if(key === "locationLat") {
                locationLatLng[0] = +value;
            }else if(key === "locationLng") {
                locationLatLng[1] = +value;
            } else {
                location[key] = value;
            }
        }
    }
    location.locationLatLng = locationLatLng;
    const response = await fetch(`${API_URL}/locations/${store}`, {
        method: "PATCH",
        headers: {
            'content-type': 'application/json',
            ...await AuthHeaders()
        },
        body: JSON.stringify(location)
    });
    const data = await response.json();

    if(response.status == 200) {
        revalidateTag(`dashboard:locations:${store}`);
        redirect('/dashboard/store=' + data.locationId);
    }
    redirect('/dashboard');
}