import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div>
        <p className="text-2xl font-bold my-4">Registrarse en la pagina</p>
        <div className="bg-orange-300 px-4 py-6 rounded-lg shadow-md">
            <Input className="text-black" label="Email" type="email" required classNames={{
                input: "text-black", 
                label: "text-white", 
            }} />
            <Input className="text-black" label="Contraseña" type="password" required classNames={{
                input: "text-black",
                label: "text-white",
            }} />
            <Input className="text-black" label="Confirmar Contraseña" type="password" required classNames={{
                input: "text-black",
                label: "text-white",
            }} />
            <div className="flex flex-col items-center">
                <Button color="default" className="py-4">Registrarse</Button>
                <p>¿Ya tienes una cuenta? <Link href="/login" className="text-blue-400 underline">Inicia sesión</Link></p>
            </div>
        </div>
        </div>
    );
}