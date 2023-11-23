function ProjectsSidebar() {
  return (
    <aside className='w-1/3 px-8 py-16 bg-slate-900 text-slate-50 md:w-72, rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-slate-200'>Your Projects</h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-slate-100">+ Add a Project</button>
      </div>
      <ul></ul>
    </aside>
  );
}

export default ProjectsSidebar;
