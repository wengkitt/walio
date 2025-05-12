import { Outlet } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function RootLayout() {
  return (
    <>
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default RootLayout;
