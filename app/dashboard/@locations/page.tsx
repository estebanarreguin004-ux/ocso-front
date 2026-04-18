import axios from "axios"
import { cookies } from "next/headers";
import { Location } from "@/entities";
import SelectLocations from "./_components/SelectLocations";
import LocationCard from "./_components/LocationCard";

const LocationPage =  async ({searchParams}: { searchParams: {[key:string]: string | string[] | undefined }})=> {
    try {
        const userCookies = await cookies();
        const token = userCookies.get("token")?.value;
        let {data} = await axios.get<Location[]>("http://localhost:4000/locations", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        data =[
            { 
                locationId: 0, 
                locationName: "Ninguna",
                locationLatLng: [0,0],
                locationAddress: "No existe",
             },
            ...data
        ]
        return (
           <div className="w-8/12">
            <div className="w-full flex flex-col item-center h-[90vh] bg-red-100">
                <div className="px-10 w-1/2">
                <SelectLocations locations={data} store={searchParams?.store} />
                </div>
                <div className="w-4/5">
                    <LocationCard store={searchParams?.store} />
                </div>
            </div>

           </div> 
        );
    } catch (error) {
        return <div className="2/12">Error al cargar las ubicaciones.</div>;
    }
}

export default LocationPage

