import Button from "./Button";

interface Project {
  id: number;
  title: string;
  // Add other properties if needed
}

interface ProjectsSidebarProps {
  onStartAddProject: () => void; // Specify the type for onStartAddProject
  projects: Project[]; // Specify the type for projects
  onSelectProject: (id: number) => void;
  selectedProjectId?: number | null | undefined;
}

function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}: ProjectsSidebarProps) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-900 text-slate-50 md:w-72, rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add a Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full px-2 py-1 my-1 text-left rounded-sm  hover:text-slate-200 hover:bg-slate-800";
          if (selectedProjectId === project.id) {
            cssClasses += " bg-slate-800 text-slate-200";
          } else {
            cssClasses += " text-slate-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
