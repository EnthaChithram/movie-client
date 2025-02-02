import React, { useState, useEffect } from "react";

const MoviePage = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [movieID, setMovieID] = useState("RRR"); // Example movie (Inception)

    const API_KEY = "23c91a2c"; // Replace with your OMDb API key

    const [imdb, setimdb] = useState([
        { id: "tt27540542", name: "m" },
        { id: "tt12735488", name: "" },
        { id: "tt26655108", name: null },
        { id: "tt14564000", name: null },
    ]);

    imdb.map((imdb) =>
        fetch("http://www.omdbapi.com/?i=" + imdb.id + "&apikey=23c91a2c")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                imdb.name = data.Title;
                imdb.year = data.Year;
                imdb.poster = data.Poster;
            })
    );



    // Fetch Movie Data from OMDb API
    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(
                    "http://www.omdbapi.com/?i=" + "tt14564000" + "&apikey=23c91a2c"
                );
                const data = await response.json();

                if (data.Response === "True") {
                    setMovie({
                        title: data.Title,
                        poster: data.Poster,
                    });
                } else {
                    setError("Movie not found");
                }
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch movie data");
                setLoading(false);
            }
        };

        fetchMovie();
    }, [movieID]);

    const handleChange = (e) => {
        setMovieID(e.target.value);
    };

    return (
        <div className="MoviePage">
            <div className="movie-details">
                {imdb.map((movie) => (
                    <div key={movie.id}>
                        <h4>{movie?.name}</h4>
                        <h2>{movie?.year}</h2>

                        <img src={movie.poster} alt={movie.title} width="300" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviePage;
