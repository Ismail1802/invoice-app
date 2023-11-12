import { Outlet } from "react-router";
import { useAppSelector } from "../../store/index";
import { useEffect } from "react";
import { Aside } from "../../components/Aside/Aside";

const Root = () => {
  const theme = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Aside />
      <Outlet />
    </>
  );
};

export { Root };
