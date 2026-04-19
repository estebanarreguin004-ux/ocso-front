import { Input, Button } from "@nextui-org/react";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { AuthHeaders } from "@/helpers/authHeaders";
import { Manager, Location } from "@/entities";
import { updateLocation } from "@/actions/locations/update";

export default async function FormUpdateLocation({store}: {store: string | string[] | undefined}) {
    if(!store || store === undefined || typeof store === 'object') return null;
    const updateWithStoreId = updateLocation.bind(null, store);
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
    let foundLocation = dataLocations.find(location => location.locationId === +store);
    let foundManager = dataManagers.find(manager => manager.managerId === foundLocation?.managerId);

    return <form action={updateWithStoreId} className="bg-orange-300 w-full flex flex-col items-center gap-4">
        <h1 className="text-2xl text-center font-bold">Actualizar Tienda</h1>
        <Input required defaultValue={foundLocation?.locationName} label="Nombre" placeholder="Ocso Juriquilla" name="locationName" />
        <Input required defaultValue={foundLocation?.locationAddress} label="Dirección de la tienda" placeholder="Avenida de la luz 120" name="locationAddress" />
        <Input required defaultValue={foundLocation?.locationLatLng[0]?.toString()} label="Latitud" placeholder="-193" name="locationLat" />
        <Input required defaultValue={foundLocation?.locationLatLng[1]?.toString()} label="Longitud" placeholder="99" name="locationLng" />
        <SelectManager managers={dataManagers} defaultManager={foundManager?.managerId} locations={dataLocations} />
        <Button type="submit" color="primary">Aceptar</Button>
    </form>
}