"use client";
import { ActiveLinkProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ url, children }: ActiveLinkProps) => {
  const pathName = usePathname();
  const isActive = url === pathName;
  return (
    <Link
      href={url}
      className={`p-3 rounded-md flex items-center gap-3  mt-2 transition-all 
      ${
        isActive
          ? "text-white bg-primary svg-animation"
          : "hover:text-primary hover:bg-primary hover:bg-opacity-10"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
