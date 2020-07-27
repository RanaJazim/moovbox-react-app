import React, { useEffect } from 'react'
import useApi from '../hooks/use_api'
import movieApi from '../services/movie_service';
import MovieCard from './movie_card';
import SwitchComponent from './switch_component';

export default function MovieList() {
    const {
        data: movieCategories,
        isLoading,
        request: loadMovies
    } = useApi(movieApi.fetchAllMovies);

    useEffect(() => {
        loadMovies();
    }, []);

    return (
        <div>
            <SwitchComponent
                isLoading={isLoading}
                Loading={<p>Fetching movies ...</p>}
                Render={
                    movieCategories.map((category) => (
                        <div
                            className="mt-2"
                            key={category.title}
                        >
                            <h3>{category.title} Movies</h3>
                            <CategoryMovies movies={category.movies} />
                        </div>
                    ))
                }
            />
        </div>
    )
}

function CategoryMovies({ movies }) {
    return (
        <div className="row">
            {movies.map((movie) => (
                <div key={movie.id} className="ml-3 mt-3">
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
}
