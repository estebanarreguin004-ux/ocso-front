import { cookies } from "next/headers";
import { TOKEN_NAME } from "@/constants";
import { cache } from "react";

export const AuthHeaders = cache(() => {
    const token = cookies().get(TOKEN_NAME)?.value;
    if(!token) return null;
    return {
        Authorization: `Bearer ${token}`
    }
})