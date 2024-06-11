import { Link } from "react-router-dom";
import { Button } from "@core/lib/shadcn/ui";
import { CreateProjectForm } from "@project/components/forms";

const CreateProjectPage = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black">Crear proyecto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear un proyecto</p>

        <nav className="my-5">
          <Link to="/project">
            <Button size="lg">Volver a Proyectos</Button>
          </Link>
        </nav>

        <CreateProjectForm />
      </div>
    </>
  );
};

export default CreateProjectPage;
