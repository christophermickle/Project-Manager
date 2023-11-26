import NewProject from "./components/NewProject";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App(): JSX.Element | undefined {
  return (
      <main className="flex h-screen gap-8 my-8 mr-4">
        <ProjectsSidebar />
        <NewProject/>
      </main>
  );
}

export default App;
