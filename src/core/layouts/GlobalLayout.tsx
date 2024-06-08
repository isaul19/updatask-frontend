import { Outlet } from "react-router-dom";
import { Logo } from "@core/components";

export const GlobalLayout = () => {
  return (
    <>
      <header className="bg-gray-800 py-5">
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-between items-center lg:flex-row">
          <div className="w-64">
            <Logo />
          </div>

          <nav></nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};
