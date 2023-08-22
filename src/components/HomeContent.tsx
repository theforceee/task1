import { datas } from "@/lib/data";
import Image from "next/image";
import React from "react";

const HomeContent = () => {
  return (
    <section className=" w-full max-w-7xl grid grid-cols-1 xs:grid-cols-3 mt-20 gap-10 xs:gap-5">
      {datas.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center gap-5"
        >
          <Image
            src={item.imgUrl}
            alt=""
            width={320}
            height={320}
            quality={95}
            objectFit="contain"
            className="rounded-lg"
          />
          <p className="">{item.content}</p>
        </div>
      ))}
    </section>
  );
};

export default HomeContent;
