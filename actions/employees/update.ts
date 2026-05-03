'use server';
import { API_URL } from "@/constants";
import { AuthHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function updateEmployee(employeeId: string, formData: FormData) {
    const cleanData = new FormData()
    for (const [key, value] of formData.entries()) {
        if(!key.startsWith("$")){
            cleanData.append(key, value);
        }
    }

    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "PATCH",
        headers: {
            ...await AuthHeaders()
        },
        body: cleanData
    });

    console.log(await response.json());

    if(response.status == 200){ 
        revalidateTag("dashboard:employees")
        revalidateTag(`dashboard:employees:${employeeId}`)
        redirect(`/dashboard/employees/${employeeId}`)
    }


}