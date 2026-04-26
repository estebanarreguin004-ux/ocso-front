
import { Provider } from "@/entities"
import { AuthHeaders } from "@/helpers/authHeaders"
import { Input, Button } from "@nextui-org/react"
import { API_URL } from "@/constants"
import updateProvider from "@/actions/providers/update"

export default async function FormUpdateProvider ({provider}: {provider: Provider}){
    const updateProviderWithId = updateProvider.bind(null, provider.providerId)
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers: {
            ...await AuthHeaders()
        }
    })

    return(
        <form action={updateProviderWithId} className="gap-4 flex flex-col flex-grow-0 bg-orange-300 rounded-lg py-5 px-10">
                <h1 className="text-2xl font-bolt text-black">Actualizar datos</h1>
                <Input label="Nombre" placeholder="Pecsi" name="providerName"></Input>
                <Input label="Correo electronico" placeholder="pecsi@pecsi.com" name="providerEmail"></Input>
                <Input label="Numero de telefono" placeholder="4xx 2xx 12xx" name="phoneNumber"></Input>
                <Button color="primary" type="submit">Actualizar</Button>
        </form>
    )
}