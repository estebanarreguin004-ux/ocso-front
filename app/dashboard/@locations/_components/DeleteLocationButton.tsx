import deleteLocation from "@/actions/locations/delete";
import { LuTrash } from "react-icons/lu";

export default function DeleteLocationButton({store}: {store: string | string[] | undefined}) {
    if(!store) return null;
    return (
        <form action={deleteLocation} className="my-5">
            <button type="submit" name="deleteValue" value={store} className="bg-red-500 text-white px-4 py-2 rounded"><LuTrash size="20"/></button>
        </form>
    )
}