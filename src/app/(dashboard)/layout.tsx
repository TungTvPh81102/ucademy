import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

const layout = ({ children }:{
    children: React.ReactNode
}) => {
  return (
    <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
      <Sidebar></Sidebar>
      <main className="ml-6 mt-5 mr-6">{children}</main>
    </div>
  );
};

export default layout;
