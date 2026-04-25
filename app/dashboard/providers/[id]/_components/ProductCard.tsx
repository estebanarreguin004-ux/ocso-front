import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Product } from "@/entities";

export default function ProductCard({product}: {product: Product}) {
    return(
        <Card className="px-5">
            <CardHeader>
                {product.productName}
            </CardHeader>
            <Divider/>
            <CardBody>
            <p>
                Nombre: <b>{product.productName}</b>
            </p>
            <p>
                Precio: <b>{product.price}</b>
            </p>
            
            </CardBody>
        </Card>
    )

}