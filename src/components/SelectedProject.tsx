function SelectedProject({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-slate-300">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-slate-600">
            {project.title}
          </h1>
          <button className="text-slate-600 hover:text-slate-950">
            delete
          </button>
        </div>
        <p className="mb-4 text-slate-400">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-slate-600">
          {project.description}
        </p>
      </header>
      TASKS
    </div>
  );
}

export default SelectedProject;
