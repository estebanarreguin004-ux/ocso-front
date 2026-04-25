import { API_URL } from "@/constants"
import { AuthHeaders } from "@/helpers/authHeaders";
import { Provider } from "@/entities";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import FormCreateProvider from "./_components/FormCreateProvider";
import CreateProvider from "./_components/CreateProvider";

const ProvidersPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...await AuthHeaders()
        },
        next:{
            tags: ["dashboard:providers"]
        }
    })
    const providers: Provider[] = await response.json()

    return (
        <div className="flex flex-col h-[90vh] items-end w-full px-10 py-10">
            <CreateProvider>
                <FormCreateProvider/>
            </CreateProvider>
            <div className="w-full flex flex-row flex-wrap gap-20 py-20">
            {providers.map((provider: Provider) => (
                <Link 
                    className="hover:scale-110 transition-transform"
                    href={`/dashboard/providers/${provider.providerId}`} 
                    key={provider.providerId} 
                >
                    <ProviderCard provider={provider} />
                </Link>
            ))}
        </div>
        </div>
    );
        
};

export default ProvidersPage;