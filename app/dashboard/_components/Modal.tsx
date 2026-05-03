

'use client';

import {
  Modal, 
  ModalContent, 
  ModalBody, 
  Button, 
  useDisclosure
} from "@nextui-org/react";
import { ReactNode } from "react";

export default function ModalGeneric({children, icon}: {children: React.ReactNode, icon: ReactNode}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="w-fit" color="primary">{icon}</Button>
      
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