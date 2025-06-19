import { RssIcon } from "lucide-react";
import Image from "next/image";
import SearchComponentPage from "../../components/SearchComponent";
import { describe } from "node:test";
import StartUpCardConponent, { StartUpCardConponentType } from "@/components/StartUpCardConponent";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { json } from "stream/consumers";

//method 1
// interface SearchParams{
//   query?:string
// }
// Wait for the Promise to resolve
// const params = await props.searchParams; 
// Get the query string (or undefined if not provided)
// const query = params.query;
// props:{searchParams:Promise<SearchParams>}


//method 2
// {searchParams}:{ searchParams : Promise<{query? : string}>}
// const query = (await searchParams).query;

export default async function Home ({searchParams}:{ searchParams : Promise<{query? : string}>}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY)
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
        <SearchComponentPage query={query} />
   </section>
   {/* search card */}
   <section className=" max-w-7xl mx-auto px-6 py-10">
    <p className="text-2xl font-semibold">{query ? `Search result for : ${query}` : `All StartUps :`}</p>


     {/* starup card */}
    <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
      {posts?.length > 0? (
        posts?.map((post:StartUpCardConponentType) => (
          <StartUpCardConponent key={post?._id} post={post}/>
        ))
      ) : (
        <p className="text-black-100 text-sm font-normal">No Startup Found!!</p>
      )}

    </ul>
   </section>

   </>
  );
}
