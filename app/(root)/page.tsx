import { RssIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
   <>
<h2 className="flex w-full h-[20rem] text-gray-800 font-bold justify-center items-center text-[5rem] font-serif">
  <span className="inline-block text-pink-700 first-letter:drop-shadow-md">
    Load
  </span>
  Blog <RssIcon className="font-bold" width={40} height={40} />
</h2>

<h2 className="flex w-full h-[20rem] text-gray-800 font-bold justify-center items-center text-[2rem] font-serif">
  <span className="inline-block text-pink-700 first-letter:drop-shadow-md">
    Load
  </span>
  Blog <RssIcon className="font-bold" width={11} height={11} />
</h2>



   </>
  );
}
