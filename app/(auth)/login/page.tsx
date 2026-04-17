"use client";

import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/constants";

export default function LoginPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        let authData: any ={}
        authData.userEmail = formData.get("userEmail"); 
        authData.userPassword = formData.get("userPassword");

        
        //const { data } = await axios.post(`${API_URL}/auth/login`, authData);
        //return;
        
        try {
            const { data } = await axios.post(`${API_URL}/auth/login`, authData, { withCredentials: true });
            console.log("Respuesta del servidor:", data);
            
            // Aquí deberías guardar el token (localStorage o Cookies)
            // localStorage.setItem("token", data.token);
            
        } catch (error: any) {
            console.error("Error en el login:", error.response?.data || error.message);
            alert("Error al iniciar sesión: " + (error.response?.data?.message || "Servidor no disponible"));
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
                <Button color="default" className="py-4" type="submit">Iniciar sesión</Button>
                <p>¿No tienes una cuenta? <Link href="/signup" className="text-blue-400 underline">Regístrate</Link></p>
            </div>
        </div>
        </form>
    );
}