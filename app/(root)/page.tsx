import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";

export default async function Home( {searchParams}: {
    searchParams: Promise<{query? : string }> }) {
    const query = (await searchParams).query

    const posts = [
        {
            _createdAt : new Date().toISOString(),
            views : 55,
            author : {_id : 1, name : "Said ARSLAN"},
            description : "This is a description",
            category : "Robots",
            title : "We robots",
            _id : 1
        }
    ]

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
                <ul className="mt-7 px-6 flex flex-col md:flex-row flex-wrap">
                    {
                        posts?.length > 0 ? (
                            posts.map((post, index) => {
                                return <StartUpCard key={index} {...post} />
                            })
                        ) : (
                            <p>No results</p>
                        )
                    }
                </ul>
          </section>
        </>

    );
}
