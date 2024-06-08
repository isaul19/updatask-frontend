import { Link } from "react-router-dom";

export const DashboardPage = () => {
  return (
    <>
      <Link
        className="bg-primary hover:opacity-90 px-10 py-3 text-white text-xl font-bold cursor-pointer transition-colors"
        to="/project"
      >
        Ir a Listado de Proyectos
      </Link>
    </>
  );
};
