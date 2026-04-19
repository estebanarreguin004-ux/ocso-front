import { Input, Button } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";

export default async function FormNewLocation({store}: {store: string | string[] | undefined}) {
    if(store) return null;
    const responseManagers = await fetch(`${API_URL}/managers`, {
        headers: {
            ...await AuthHeaders()
        },
        next: {
            tags: ['dashboard:managers']
        }
    });
    const dataManagers: Manager[] = await responseManagers.json();

    const responseLocations = await fetch(`${API_URL}/locations`, {
        headers: {
            ...await AuthHeaders()
        },
        next: {
            tags: ['dashboard:locations', 'dashboard:locations:managers']
        }
    });
    const dataLocations: Location[] = await responseLocations.json();

    return <form action={createLocation} className="bg-orange-400 w-full flex flex-col items-center gap-4">
        <h1 className="text-2xl text-center font-bold">Crear Tienda</h1>
        <Input required label="Nombre" placeholder="Ocso Juriquilla" name="locationName" />
        <Input required label="Dirección de la tienda" placeholder="Avenida de la luz 120" name="locationAddress" />
        <Input required label="Latitud" placeholder="-193" name="locationLat" />
        <Input required label="Longitud" placeholder="99" name="locationLng" />
        <SelectManager managers={dataManagers} locations={dataLocations} />
        <Button type="submit" color="primary">Subir</Button>
    </form>
}