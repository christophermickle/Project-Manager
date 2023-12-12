import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface ModalProps {
  children?: React.ReactNode;
  buttonCaption?: string;
}

const Modal = forwardRef(function Modal(
  { children, buttonCaption }: ModalProps,
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method='dialog'>
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
