import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!userId) return redirect('/sign-in');
  return <div>{children}</div>;
};

export default layout;
