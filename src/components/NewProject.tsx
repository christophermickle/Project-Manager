import Input from "./Input";

function NewProject() {
  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-slate-800 hover:text-slate-950'>
            Cancel
          </button>
        </li>
        <li>
          <button className='bg-slate-800 text-slate-50 hover:bg-slate-950 px-6 py-2 rounded-md'>
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label='Title' />
        <Input label='Description' textarea />
        <Input label='Due Date' />
      </div>
    </div>
  );
}

export default NewProject;
