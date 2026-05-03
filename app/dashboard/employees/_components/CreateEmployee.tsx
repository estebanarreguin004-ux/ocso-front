
'use client';

import {
  Modal, 
  ModalContent, 
  ModalBody, 
  Button, 
  useDisclosure
} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";


export default function CreateEmployee({children, icon}: {children: React.ReactNode, icon: ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary">{icon}</Button>
      
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