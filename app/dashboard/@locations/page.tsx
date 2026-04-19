import axios from "axios"
import { Location } from "@/entities";
import SelectLocations from "./_components/SelectLocations";
import LocationCard from "./_components/LocationCard";
import { API_URL } from "@/constants";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { AuthHeaders } from "@/helpers/authHeaders";

const LocationPage =  async ({searchParams}: { searchParams: {[key:string]: string | string[] | undefined }})=> {
    try {
        let {data} = await axios.get<Location[]>(`${API_URL}/locations`, {
            headers: {
                ...await AuthHeaders()
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
           <div className="w-8/12 h-full flex flex-col items-center">
            <div className="w-full flex flex-col item-center h-[90vh] bg-red-100">
                <div className="px-10 w-1/2">
                <SelectLocations locations={data} store={searchParams?.store} />
                </div>
                <div className="w-4/5">
                    <LocationCard store={searchParams?.store} />
                </div>
                <div className="w-5/12 items-center justify-center flex py-10 px-5">
                <FormNewLocation store={searchParams?.store} />
                </div>
                <DeleteLocationButton store={searchParams?.store} />
            </div>
           </div> 
        );
    } catch (error) {
        return <div className="2/12">Error al cargar las ubicaciones.</div>;
    }
}

export default LocationPage

