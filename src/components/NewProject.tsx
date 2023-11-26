import { useRef } from "react";
import Input from "./Input";

function NewProject() {
  // useRef<HTMLInputElement | HTMLTextAreaElement>(null) allows the ref to be an input or a textarea
  const title = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const description = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-slate-800 hover:text-slate-950'>
            Cancel
          </button>
        </li>
        <li>
          <button className='px-6 py-2 rounded-md bg-slate-800 text-slate-50 hover:bg-slate-950'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label='Title' />
        <Input ref={description} label='Description' textarea />
        <Input ref={dueDate} label='Due Date' />
      </div>
    </div>
  );
}

export default NewProject;
