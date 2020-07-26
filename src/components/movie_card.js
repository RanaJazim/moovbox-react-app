import React from 'react'
import AppRating from './app_rating';
import TrimContent from './trim_content';

export default function MovieCard({ movie }) {
    return (
        <div className="card bg-dark text-white" style={{ width: "18rem" }}>
            <img
                className="card-img-top"
                src={apiImgUrl + movie.poster_path}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">
                    <TrimContent content={movie.title} maxLength={20} />
                </h5>
                <p className="card-text">
                    <TrimContent content={movie.overview} />
                </p>
                <AppRating>
                    {movie.vote_average}
                </AppRating>
                <button className="btn btn-primary d-block mt-2">
                    Watch
                </button>
            </div>
        </div>
    )
}

const apiImgUrl = "https://image.tmdb.org/t/p/w500";