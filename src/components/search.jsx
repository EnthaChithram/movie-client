import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react"

const Search = (() => {

    const TMDB = "8fc91a34b6eba62b31098c5188e8af96"

    const API_KEY = "23c91a2c"; // Replace with your OMDb API key
    const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

    const [query, setQuery] = useState("")
    const [results, setResults] = useState("")
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)

    const resultRef = useRef(null)

    const handleSubmit = (async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`${API_URL}&s=${query}`)
            const data = await res.json()

            console.log("ddd")

            if (data.Response = "True") {
                setResults(data.Search);

                console.log("dsff")
                console.log(results)
                console.log(data?.search)
            } else {
                setResults([]);
                console.log("nnnn")

            }
        } catch (error) {
            console.log("error catch", error)

        }

    })

    useEffect(() => {
        if (!query || query.trim().length === 0) {
            setResults([]);
            return;
        }



        const timer = setTimeout(() => {
            const tmdb = async () => {
                setLoading(true)


                try {
                    const targetUrl = `https://api.themoviedb.org/3/search/movie?api_key=8fc91a34b6eba62b31098c5188e8af96&query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`;

                    const res = await fetch(`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(targetUrl)}`);
                    const data = await res.json();

                    // Add full poster URL to each result


                    // Get IMDB IDs for each movie (with CORS proxy)
                    const moviesWithImdb = await Promise.all(
                        data.results.slice(0, 5).map(async (movie) => {
                            try {
                                setLoading(true)
                                const detailTargetUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=8fc91a34b6eba62b31098c5188e8af96`;
                                const detailRes = await fetch(
                                    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(detailTargetUrl)}`
                                );
                                const detailData = await detailRes.json();
                                return {
                                    ...movie,
                                    imdb_id: detailData.imdb_id || null, // Fixed: consistent naming
                                };
                            } catch (error) {
                                console.log(`Error fetching details for ${movie.title}:`, error);
                                return { ...movie, imdb_id: null };
                            }
                        })
                    );

                    setResults(moviesWithImdb);
                    console.log("with IMDB IDs:", moviesWithImdb);

                } catch (error) {
                    console.log("Search error:", error);
                }
                finally {
                    setLoading(false)
                }
            };
            tmdb();
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);




    useEffect(() => {
        const handleClick = ((e) => {
            if (resultRef.current && !resultRef.current.contains(e.target)) {
                setShow(false)
            }
        })

        document.addEventListener("mousedown", handleClick)
    }, [])

    return (

        <div className=" text-white w-full flex flex-col items-center  justify-center ">

            <motion.div className="relative w-[100%] flex flex-col px-2 rounded-2xl  justify-center"
                onClick={() => setShow(true)}


                transition={{ duration: 0.5 }}>

                <form className="w-full px-5 rounded-3xl border-1 py-1 border-orange-500 flex justify-between"
                    onSubmit={handleSubmit}>

                    <input className="w-full px-5 outline-0  text flex items-center placeholder:italic"
                        required
                        type="text"
                        value={query}
                        placeholder="Find a movie..."
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <div className="w-5">{loading ? <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid  transform translate-y-0.5 border-t-transparent border-orange-600"></span> : null}</div>
                </form>

                <motion.div className={`absolute mt-2 top-[100%] flex flex-col w-[95%] bg-[#1a2436] shadow-2xl pt-2  rounded-2xl max-h-130 overflow-hidden overflow-y-scroll z-[1000000]
                ${show ? `${!query ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}` : "opacity-0 pointer-events-none"}  transition-all duration-400`}
                    ref={resultRef}



                >



                    {results && results.map((m, index) => (
                        <a href={`/movies/${m.imdb_id}`}><div className="px-2 border-b border-b-gray-600 py-2" key={m.index}>
                            <div className="flex items-centre space-x-3">
                                <img className="h-[70px] w-[47px] rounded-md shadow-black shadow-xs  " src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} />
                                <div className="flex flex-col space-y-1.5 items-start  text-sm">
                                    <h1 className="truncate ">{m.title}</h1>
                                    <h1 className="truncate">{m.release_date?.split("-")[0]}</h1>

                                </div>

                            </div>
                            {/* <h1>{m.id},{m.imdbID}</h1>


                            <h1></h1> */}
                        </div></a>
                    ))}
                </motion.div>
            </motion.div>



        </div>
    )
})

export default Search