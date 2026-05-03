'use client'

import { Location } from "@/entities"
import { Select, SelectItem } from "@nextui-org/react"

export default  function SelectLocation({stores}: {stores: Location[]}) {
    
    return (
        <Select name="locationId" label="Selecciona una tienda" defaultSelectedKeys={undefined}>
            {stores.map((store: Location) => (
                <SelectItem key={String(store.locationId)} textValue={store.locationName}>
                    {store.locationName}
                </SelectItem>
            ))}

        </Select>
    )

}