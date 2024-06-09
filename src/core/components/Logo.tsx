import { Link } from "react-router-dom";
import logoSrc from "@icons/logo.svg";

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logoSrc} alt="logo icon" />;
      </Link>
    </>
  );
};
