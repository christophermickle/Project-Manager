import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";

interface ModalProps {
  children?: React.ReactNode;
  buttonCaption?: string;
}

export interface ModalRef {
  open(): void;
}

const Modal = forwardRef<ModalRef, ModalProps>(function Modal(
  { children, buttonCaption }: ModalProps,
  ref
) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));
  return createPortal(
    <dialog
      ref={dialog}
      className='p-4 rounded-md shadow-md backdrop:bg-slate-900/90'
    >
      {children}
      <form method='dialog' className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
