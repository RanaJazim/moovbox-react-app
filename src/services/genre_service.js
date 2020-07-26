import http from 'axios';

function fetchAllGenres() {
    return http.get("/genre");
}

export default {
    fetchAllGenres,
};