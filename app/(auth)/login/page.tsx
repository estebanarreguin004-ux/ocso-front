"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { API_URL } from "@/constants";
import { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setSubmitting(true);
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        let authData: any ={}
        authData.userEmail = formData.get("userEmail"); 
        authData.userPassword = formData.get("userPassword");

        
        //const { data } = await axios.post(`${API_URL}/auth/login`, authData);
        //return;
        
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                body: JSON.stringify(authData),
                credentials: "include"
            });
            if(response.status === 201) {
                router.push("/dashboard");
            }
            setSubmitting(false);   
        } catch (error: any) {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <p className="text-2xl font-bold my-4">Iniciar sesión</p>
        <div className="bg-orange-300 px-4 py-6 rounded-lg shadow-md">
            <Input className="text-black" label="Email" name="userEmail" type="email" required classNames={{
                input: "text-black", 
                label: "text-white", 
            }} />
            <Input className="text-black" label="Contraseña" name="userPassword" type="password" required classNames={{
                input: "text-black",
                label: "text-white",
            }} />
            <div className="flex flex-col items-center">
                <Button color="default" disabled={submitting} className="py-4" type="submit">
                    {submitting ? <Spinner size="md" /> : "Iniciar sesión"}
                </Button>
                <p>¿No tienes una cuenta? <Link href="/signup" className="text-blue-400 underline">Regístrate</Link></p>
            </div>
        </div>
        </form>
    );
}