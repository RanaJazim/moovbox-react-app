import React, { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import genreApi from '../../services/genre_service';
import useApi from '../../hooks/use_api';
import SwitchComponent from '../switch_component';

export default function GenreList() {
    const {
        data: genres,
        isLoading,
        request: loadGenres
    } = useApi(genreApi.fetchAllGenres);

    useEffect(() => {
        loadGenres();
    }, []);

    return (
        <div className="card bg-dark text-white">
            <div className="card-body">
                <h3>Genres</h3>
                <SwitchComponent
                    isLoading={isLoading}
                    Render={<Genres genres={genres} />}
                />
            </div>
        </div>
    )
}

function Genres({ genres }) {
    return (
        genres.map((item) => <p key={item.id}>
            <a
                href=""
                style={{ color: "white", textDecoration: "none" }}
            >
                {item.name}
            </a>
        </p>)
    );
}