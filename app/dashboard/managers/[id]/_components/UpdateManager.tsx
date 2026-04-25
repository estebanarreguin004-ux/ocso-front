'use client';

import {
  Modal, 
  ModalContent, 
  ModalBody, 
  Button, 
  useDisclosure
} from "@nextui-org/react";
import { LuPencil } from "react-icons/lu";


export default function UpdateManager({children}: {children: React.ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPencil size="20"/></Button>
      
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}