'use server';
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";

export async function createLocation(formData: FormData) {
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
    await axios.post(`${API_URL}/locations`, location, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}