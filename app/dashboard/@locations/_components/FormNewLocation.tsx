import { Input, Button } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";
import SelectManager from "./SelectManager";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    if(store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const responseManagers = await axios.get(`${API_URL}/managers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const responseLocations = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return <form action={createLocation} className="bg-orange-300 w-full flex flex-col items-center gap-4">
        <h1 className="text-2xl text-center font-bold">Crear Tienda</h1>
        <Input label="Nombre" placeholder="Ocso Juriquilla" name="locationName" />
        <Input label="Dirección de la tienda" placeholder="Avenida de la luz 120" name="locationAddress" />
        <Input label="Latitud" placeholder="-193" name="locationLat" />
        <Input label="Longitud" placeholder="99" name="locationLng" />
        <SelectManager managers={responseManagers.data} locations={responseLocations.data} />
        <Button type="submit" color="primary">Subir</Button>
    </form>
}