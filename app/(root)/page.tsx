import { RssIcon } from "lucide-react";
import Image from "next/image";
import SearchComponentPage from "../components/SearchComponent";

//method 1
interface SearchParams{
  query?:string
}
//method 2

// {searchParams}:{ searchParams : Promise<{query? : string}>}
// const query = (await searchParams).query;

export default async function Home (props:{searchParams:Promise<SearchParams>}) {
  // Wait for the Promise to resolve
  const params = await props.searchParams;
   // Get the query string (or undefined if not provided)
  const query = params.query;
  return (
   <>
   <section className="bg-primary min-h-[540px] pattern flex justify-center items-center flex-col py-10 px-6 ">

    <h1 className="uppercase bg-black px-6 py-3 text-white font-work-sans font-extrabold text-[26px] sm:text-[36px] sm:leading-[64px] leading-[46px] max-w-5xl text-center my-5">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
    </h1>
       <p className="font-medium text-[20px] text-center break-words text-white !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        {/* <SearchComponentPage initialQuery={query}/> */}
   </section>

   </>
  );
}
