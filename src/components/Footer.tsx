import { socials } from "@/lib/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full">
      <div className="max-w-7xl mx-auto text-white py-10 flex flex-col items-center">
        <div className="flex gap-5">
          {socials.map((social) => (
            <Link
              href={social.href}
              key={social.name}
              className="hover:text-blue-600 duration-200"
            >
              {social.name}
            </Link>
          ))}
        </div>
        <div className="mt-2 text-gray-400 text-sm">© 2023 My Company</div>
      </div>
    </div>
  );
};

export default Footer;
