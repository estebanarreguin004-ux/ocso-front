import createProvider from "@/actions/providers/create"
import { Input, Button } from "@nextui-org/react"

export default function FormCreateProvider(){
    return(
        <form action={createProvider} className="gap-4 flex flex-col flex-grow-0">
        <h1 className="text-2xl font-bolt text-white">Crear proveedor</h1>
        <Input label="Nombre" placeholder="Pecsi" name="providerName"></Input>
        <Input label="Correo electronico" placeholder="pecsi@pecsi.com" name="providerEmail"></Input>
        <Input label="Numero de telefono" placeholder="4xx 2xx 12xx" name="phoneNumber"></Input>
        <Button type="submit">Crear</Button>
        </form>
    )
}