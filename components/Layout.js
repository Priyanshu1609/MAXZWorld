import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";

function Layout({ children }) {
  const router = useRouter();



  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default Layout;
