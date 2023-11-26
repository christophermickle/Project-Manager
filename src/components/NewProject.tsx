import React, { useRef } from "react";
import Input from "./Input";

type NewProjectProps = {
  onAdd: (projectData: {
    title: string;
    description: string;
    dueDate: string;
  }) => void;
};

function NewProject({ onAdd }: NewProjectProps) {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    const enteredTitle = title.current?.value ?? "";
    const enteredDescription = description.current?.value ?? "";
    const enteredDueDate = dueDate.current?.value ?? "";

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-slate-800 hover:text-slate-950'>
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
          textareaProps={{}}
          ref={description}
          label='Description'
          textarea
        />
        <Input inputProps={{ type: "date" }} ref={dueDate} label='Due Date' />
      </div>
    </div>
  );
}

export default NewProject;
