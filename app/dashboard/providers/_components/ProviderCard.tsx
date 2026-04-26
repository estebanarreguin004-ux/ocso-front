import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({provider}: {provider: Provider}) {
    return(
        <Card className="h-fit pr-20 pl-10 mi-w-[200px] content-start text-left max-w-[350px]">
        <CardHeader className="font-bolt text-2xl">
            {provider.providerName}
        </CardHeader>
        <Divider/>
        <CardBody>
            <p>
                Correo electrónico:
            </p>
            <b>{provider.providerEmail}</b>
            <p>
                Número de teléfono: 
            </p>
            <b>{provider.phoneNumber}</b>
            <p>
              {
                provider.products.length !== 0 ? (
                    <p>
                        Tiene {provider.products.length} producto{provider.products.length == 1? "" : "s"}
                    </p>
                ) : 
                <p>No tiene productos</p>
              }
                </p>
        </CardBody>
    </Card>
    )
    

}