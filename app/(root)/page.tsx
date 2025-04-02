import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import {STARTUPS_QUERY} from "@/sanity/lib/queries";
import {sanityFetch, SanityLive} from "@/sanity/lib/live";

export default async function Home( {searchParams}: {
    searchParams: Promise<{query? : string }> }) {
    const query = (await searchParams).query
    const params = {search: query || null}

        const {data : posts} = await sanityFetch({query : STARTUPS_QUERY, params})

    return (
        <>
      <section className="pink_container">
        <div className="heading">Pitch Your Startup, <br /> Connect with entrepreneurs</div>
          <p className="text-center font-bold mt-4 text-white text-lg mx-3">
              Submit, Ideas, Vote on Pitches, and get noticed in virtual competitions.
          </p>
          <SearchForm query={query} />
      </section>
            <section className="pt-8 w-full">
                <p className="mt-4 text-4xl font-extrabold ml-4">
                    {query ? `Search results for "${query}"` : 'All Startups'}
                </p>
                <ul className="mt-7 px-6 flex flex-col md:flex-row flex-wrap gap-4">
                    {
                        posts?.length > 0 ? (
                            posts.map((post: StartUpCard, index: number) => {
                                return <StartUpCard key={index} {...post} />
                            })
                        ) : (
                            <p>No results</p>
                        )
                    }
                </ul>
          </section>
            <SanityLive />
        </>

    );
}
