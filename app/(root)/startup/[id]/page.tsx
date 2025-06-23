import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { DETAIL_STARTUPS_QUERY } from "@/sanity/lib/queries";
import { tree } from "next/dist/build/templates/app-page";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import markdowit from 'markdown-it'
import { Skeleton } from "@/components/ui/skeleton";
import ViewComponent from "@/components/ViewComponent";

  const md = markdowit();
export const experiencement_ppr = true;
export const StartupDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;
  const post = await client.fetch(DETAIL_STARTUPS_QUERY, { id });
  if (!post) return notFound();

  const paresdContent = md.render(post?.pitch || '')


  return (
    <>
      {/* container section of detail */}
      <section className="bg-primary min-h-[440px] pattern flex justify-center items-center flex-col py-10 px-6">
        <p className="bg-yellow-300 px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative tag-tri tage-tri::before">
          {formatDate(post?._createdAt)}
        </p>
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5">
          {post?.title}
        </h1>
        <p className="font-medium text-[20px] text-white text-center break-words max-w-2xl ">
          {post?.description}
        </p>
      </section>
      {/* middle section which content conatiner */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <img
          src={post?.image}
          alt={`thmail${post?.title}`}
          className="w-full h-auto rounded-xl"
        />
            {/* author name */}

        <div className="max-w-4xl mx-auto space-y-5 mt-10">
          <div className="flex justify-between items-center gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex items-center gap-5 mb-3"
            >
              <Image
                src={post.author?.image}
                alt={`avartar${post.author?.username}`}
                width={100}
                height={100}
                className="drop-shadow-lg rounded-full object-cover flex-shrink-0"
              />

               <div>
              <p className="text-black text-[20px] font-medium">{post.author?.name}</p>
              <p className="text-gray-400 text-[16px] font-medium">@{post.author?.username}</p>
            </div>
            </Link>
            <p className="font-medium text-[16px] bg-gray-700 text-white px-4 py-2 rounded-full">{post?.category}</p>  
          </div>
          <h3 className="font-bold text-[30px] text-black">Pitch Detail</h3>
          {/* prevent xss script cross attack */}
          {paresdContent ? (
            <article
            className="max-w-4xl font-work-sans break-all prose"
            dangerouslySetInnerHTML={{__html:paresdContent}}
            />
            ) : (
              <p className="text-[30px] font-medium text-black">
                no detail provided
              </p>
            )}
        </div>
        <hr className="border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto" />
        {/* mark edit selector */}
        <Suspense fallback={<Skeleton className="bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3"/>} >
          <ViewComponent id={id}/>
        </Suspense>
      </section>
    </>
  );
};

export default StartupDetail;
