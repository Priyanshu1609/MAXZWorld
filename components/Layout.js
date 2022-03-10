import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";

function Layout({ children }) {
  const router = useRouter();
  console.log(router.pathname)


  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
