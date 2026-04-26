'use client';

import {
  Modal, 
  ModalContent, 
  ModalBody, 
  Button, 
  useDisclosure
} from "@nextui-org/react";
import { LuPencil, LuTrash } from "react-icons/lu";


export default function DeleteProvider({children}: {children: React.ReactNode}) {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="danger"><LuTrash size="20"/></Button>
      
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        disableAnimation={true}
        portalContainer={typeof window !== 'undefined' ? document.body : undefined}
        className="bg-orange-400"
      >
        <ModalContent>
          {(onClose) => (
            <>    
              <ModalBody>
                {children}
                <Button onPress={close}>Cancelar</Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}