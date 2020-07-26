import React from 'react'
import GenreList from '../components/form/genre_list'
import MovieList from '../components/movie_list'

export default function MovieScreen() {
    return (
        <div className="row m-2">
            <div className="col-md-2">
                <GenreList />
            </div>
            <div className="col-md-10">
                <MovieList />
            </div>
        </div>
    )
}
