'use server'
import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders"
import { revalidateTag  } from "next/cache"
import { redirect } from "next/navigation"

export default async function deleteEmployee(employeeId: string) {
    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: "DELETE",
        headers: {
            ...AuthHeaders()
        }
    })

    if(response.status == 200) {
        revalidateTag("dashboard:employees")
        redirect("/dashboard/employees")
    
    }

}