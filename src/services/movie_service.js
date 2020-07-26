import http from 'axios';

function fetchAllMovies() {
    return http.get("/movie");
}

export default {
    fetchAllMovies,
}