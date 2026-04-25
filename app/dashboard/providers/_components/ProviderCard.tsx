import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({provider}: {provider: Provider}) {
    return(
        <Card className="pr-20 pl-10 content-start text-left">
        <CardHeader>
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
                provider.products ? (
                    <p>
                        Tiene {provider.products.length} productos
                    </p>
                ) : 
                <p>No tiene productos</p>
              }
                </p>
        </CardBody>
    </Card>
    )
    

}