import { Link } from "react-router-dom";

export const ListProjectPage = () => {
  return (
    <>
      <h1 className="text-5xl font-black">Mis proyectos</h1>
      <p className="text-2xl font-light text-gray-500 mt-5">Maneja y adminstra tus proyectos</p>

      <nav className="my-5">
        <Link
          className="bg-primary hover:opacity-90 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
          to="/project/create"
        >
          Nuevo Proyecto
        </Link>
      </nav>
    </>
  );
};
