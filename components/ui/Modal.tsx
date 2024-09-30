import React from "react";
import { Modal as NextUIModal, ModalContent } from "@nextui-org/modal";

import { IModal } from "@/interfaces";

export default function Modal({
  children,
  isOpen,
  classes,
  classNames,
  backdrop,
  placement,
  onOpenChange,
}: IModal) {
  return (
    <>
      <NextUIModal
        backdrop={backdrop}
        className={classes}
        classNames={classNames}
        hideCloseButton={true}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        placement={placement}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>{children}</ModalContent>
      </NextUIModal>
    </>
  );
}
