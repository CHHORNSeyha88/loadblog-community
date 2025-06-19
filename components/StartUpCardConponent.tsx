import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const StartUpCardConponent = ({ post }: { post: StartUpCardConponentType }) => {

  const {_createdAt, views, author:{id:authorID, name}, title, category, image, _id, description} = post;

  return (
    // Card startup
    <>
       <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-gray-600 transition-all duration-500 hover:shadow-300 hover:bg-pink-100 group">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-red-500" />
          <span className="text-[16px] text-black font-medium">{views}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorID}`}>
            <p className="text-[16px] text-black font-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-[26px] text-black font-medium line-clamp-1">{title}</h3>
          </Link>
        </div>
      </div>

    </li>
    </>
  );
};


          {/* <div className="flex justify-between items-center mt-5 gap-6"> 
        <div className="flex-1">
          <Link href={`/user/${authorID}`}>
          <p className="font-medium text-[16px] text-black">
            {name}
          </p>
         </Link>
          <Link href={`/startup/${_id}`}>
          <p className="font-semibold text-[26px] text-black line-clamp-1">
            {title}
          </p>
        </Link>
        </div>

      </div> */}

export default StartUpCardConponent;
