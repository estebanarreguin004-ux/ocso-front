
import { LuPlus } from "react-icons/lu";
import ModalGeneric from "../_components/Modal";
import FormCreateManager from "./_components/FormCreateManager";


const ManagersPage = async () => {
    return (
        <ModalGeneric icon={<LuPlus size="20"/>}>
            <FormCreateManager />
        </ModalGeneric>
    )
}

export default ManagersPage;