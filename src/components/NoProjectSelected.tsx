import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

interface NoProjectSelectedProps {
  onStartAddProject: () => void; // Specify the type for onStartAddProject
}

function NoProjectSelected({ onStartAddProject }: NoProjectSelectedProps) {
  return (
    <div className='w-2/3 mt-24 text-center'>
      <img
        src={noProjectImage}
        alt='An empty task list'
        className='object-contain w-16 h-16 mx-auto'
      />
      <h2 className='my-4 text-xl font-bold text-slate-500 '>
        No project selected
      </h2>
      <p className='mb-4 text-slate-400'>
        Please select a project, or get started with a new one.
      </p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
  );
}

export default NoProjectSelected;
