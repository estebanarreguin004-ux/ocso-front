
'use client';

import {
  Modal, 
  ModalContent, 
  ModalBody, 
  Button, 
  useDisclosure,
  Image
} from "@nextui-org/react";
import { ReactNode } from "react";
import { LuPlus } from "react-icons/lu";


export default function CreateUser({children, icon, photo}: {children: React.ReactNode, icon: ReactNode, photo: string | undefined}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Image src={photo} onClick={onOpen}
      className="z-0 object-cover" classNames={{img: "size-60"}} isZoomed/>
      
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