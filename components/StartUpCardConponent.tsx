import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Author, Startup } from "@/sanity.types";

export type StartUpCardConponentType = Omit<Startup,"author"> & {author? : Author}

const StartUpCardConponent = ({ post }: { post: StartUpCardConponentType }) => {
  const {
    _createdAt,
    view,
    author,
    title,
    category,
    image,
    _id,
    description,
  } = post;

  return (
    // Card startup
    <>
      <li className="bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-gray-600 transition-all duration-500 hover:shadow-300 hover:bg-pink-100 group">
        <div className="flex justify-between items-center">
          <p className="font-medium text-[16px] bg-primary-100 px-4 py-2 rounded-full group-hover:bg-white-100">
            {formatDate(_createdAt)}
          </p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-red-500" />
            <span className="text-[16px] text-black font-medium">{view}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/user/${author?._id}`}>
              <p className="text-[16px] text-black font-medium line-clamp-1">
                {author?.name}
              </p>
            </Link>
            <Link href={`/startup/${_id}`}>
              <h3 className="text-[26px] text-black font-medium line-clamp-1">
                {title}
              </h3>
            </Link>
          </div>

          <Link href={`/user/${author?._id}`}>
            {/* profile */}
            <Image
              src={image} // Note: Corrected "×" to "x" in dimensions
              width={48}
              height={48}
              className="rounded-full object-cover aspect-square"
              alt={`${author?.name}'s profile picture`} // More descriptive alt text
              priority={false} // Optional: set to true if above the fold
            />
          </Link>
        </div>

        {/* des */}
        <Link href={`/startup/${_id}`}>
          <p className="font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all">
            {description}
          </p>
        </Link>
        {/* card img */}
        <img
          src={image}
          alt="image_card_placehold"
          className="w-full h-[164px] rounded-[10px] object-cover"
        />
        <div className="flex justify-between items-center mt-5 gap-3">
          {/* button info */}
          <Link href={`query=${category?.toLowerCase()}`}>
            <span className="text-[16px] font-medium text-black">
              {category}
            </span>
          </Link>
          <Button
            className="rounded-full bg-black font-medium text-[16px] text-white px-5 py-3 !important"
            asChild
          >
            <Link href={`/startup/${_id}`}>Detail</Link>
          </Button>
        </div>
      </li>
    </>
  );
};

export default StartUpCardConponent;
