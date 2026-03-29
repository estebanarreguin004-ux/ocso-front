import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div>
        <p className="text-2xl font-bold my-4">Iniciar sesión</p>
        <div className="bg-orange-300 px-4 py-6 rounded-lg shadow-md">
            <Input className="text-black" label="Email" type="email" required classNames={{
                input: "text-black", 
                label: "text-white", 
            }} />
            <Input className="text-black" label="Contraseña" type="password" required classNames={{
                input: "text-black",
                label: "text-white",
            }} />
            <div className="flex flex-col items-center">
                <Button color="default" className="py-4">Iniciar sesión</Button>
                <p>¿No tienes una cuenta? <Link href="/signup" className="text-blue-400 underline">Regístrate</Link></p>
            </div>
        </div>
        </div>
    );
}