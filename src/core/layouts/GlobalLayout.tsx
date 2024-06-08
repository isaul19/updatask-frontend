import { Outlet } from "react-router-dom";
import { Logo, NavMenu } from "@core/components";

export const GlobalLayout = () => {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-between items-center lg:flex-row">
          <div className="w-64">
            <Logo />
          </div>

          <NavMenu />
        </div>
      </header>

      <main className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet />
      </main>

      <footer className="py-5 text-center">Todos los derechos reservados {new Date().getFullYear()}</footer>
    </>
  );
};
