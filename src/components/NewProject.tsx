import  { useRef } from "react";
import Input from "./Input";
import Modal, { ModalRef } from "./Modal"; // Import Modal and ModalRef

type NewProjectProps = {
  onAdd: (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }) => void;
  onCancel: () => void;
};

function NewProject({ onAdd, onCancel }: NewProjectProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);
  const modal = useRef<ModalRef>(null); // Use ModalRef type here

  const handleSave = () => {
    const enteredTitle = title.current?.value ?? "";
    const enteredDescription = description.current?.value ?? "";
    const enteredDueDate = dueDate.current?.value ?? "";

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      if (modal.current !== null) {
        modal.current.open();
      }
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption='Close'>
        <h2 className='my-4 text-xl font-bold text-slate-900 '>
          Invalid Input
        </h2>
        <p className='mb-4 text-slate-800'>
          Oops... Looks like you forgot to input a value.
        </p>
        <p className='mb-4 text-slate-800'>
          Please ensure you input a valid value for every input field.
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              onClick={onCancel}
              className='text-slate-800 hover:text-slate-950'
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='px-6 py-2 rounded-md bg-slate-800 text-slate-50 hover:bg-slate-950'
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input inputProps={{ type: "text" }} ref={title} label='Title' />
          <Input
            textareaProps={{}} // Pass an empty object for textareaProps
            ref={description}
            label='Description'
            textarea
          />
          <Input inputProps={{ type: "date" }} ref={dueDate} label='Due Date' />
        </div>
      </div>
    </>
  );
}

export default NewProject;
