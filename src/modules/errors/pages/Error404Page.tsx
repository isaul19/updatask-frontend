import { Link } from "react-router-dom";

export const Error404Page = () => {
  return (
    <div className="mt-[200px]">
      <div className="bg-white p-10 shadow-sm rounded-lg">
        <h1 className="font-black text-center text-4xl text-primary">Página No Encontrada</h1>
        <p className="mt-10 text-center text-primary">
          Tal vez quieras volver a{" "}
          <Link className=" text-fuchsia-500 underline" to="/project">
            Proyectos
          </Link>
        </p>
      </div>
    </div>
  );
};
