import React, {Suspense} from 'react'
import {client} from "@/sanity/lib/client";
import {STARTUP_BY_ID_QUERY} from "@/sanity/lib/queries";
import {notFound} from "next/navigation";
import {formatDate} from "@/lib/utils";
import {Skeleton} from "@/components/ui/skeleton";
import View from "@/components/View";

export const experimental_ppr = true

const Page =  async ({params } : {params : Promise<{id : string}>})   => {

    const id = (await params).id


    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id})

    if (!post) notFound()

    return (
       <>
           <section>
               <p>{formatDate(post?._createdAt)}</p>
           <h1>{post.title}</h1>
               <p>{post.description}</p>
               <Suspense fallback={<Skeleton />}>
                   <View id={id}/>
               </Suspense>
           </section>
       </>
    )
}
export default Page
