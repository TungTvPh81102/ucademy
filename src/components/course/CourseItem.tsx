import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconClock, IconEye, IconStar } from "../icons";

const courseInfo = [
  {
    title: "3000",
    icon: <IconEye className="size-4"></IconEye>,
  },
  {
    title: "5.0",
    icon: <IconStar className="size-4"></IconStar>,
  },
  {
    title: "30h25p",
    icon: <IconClock className="size-4"></IconClock>,
  },
];

const CourseItem = () => {
  return (
    <div className="bg-white border dark:bg-grayDarker dark:border-opacity-10 border-gray-200 p-4 rounded-2xl">
      <Link href="#" className="block h-[180px] relative">
        <Image
          className="w-full h-full object-cover rounded-lg"
          width={300}
          height={200}
          src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y291cnNlfGVufDB8fDB8fHww"
          alt=""
          sizes="@media (min-width: 640px) 380px 100vw"
          priority
        />
        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-me bg-green-500 text-xs">
          New
        </span>
      </Link>
      <div className="py-4">
        <h3 className="font-bold text-lg mb-3">
          Khóa học NextJS Pro - Xây dựng E-Learning system hoàn chỉnh
        </h3>
        <div className="flex items-center gap-3 mb-5 text-xs text-gray-500">
          {courseInfo.map((item, index) => (
            <div className="flex items-center gap-2" key={index}>
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
          <span className="font-bold text-primary ml-auto text-base">
            799.000
          </span>
        </div>
        {/* <div className="flex items-center justify-between">
          <span className="text-xs  px-3 py-1 bg-gray-100 text-gray-500 rounded-full">30h25p</span>
          <span className="font-semibold text-primary">799.000</span>
        </div> */}
        <Link
          href="#"
          className="flex items-center justify-center w-full mt-10 bg-primary rounded-lg text-white font-semibold h-12"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};

export default CourseItem;
