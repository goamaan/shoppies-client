import { API_URL, API_KEY } from './config';

export const fetchMovies = async (
    searchTerm: string,
    page: number,
    searchType: string,
    searchYear: string,
    anyYear: boolean,
) => {
    if (!searchTerm) {
        return;
    }
    let moviesEndpoint;
    if (anyYear) {
        moviesEndpoint = `${API_URL}/?s=${searchTerm}&type=${searchType}&page=${page}&apikey=${API_KEY}`;
    } else {
        moviesEndpoint = `${API_URL}/?s=${searchTerm}&type=${searchType}&y=${searchYear}&page=${page}&apikey=${API_KEY}`;
    }

    return moviesEndpoint && (await fetch(moviesEndpoint)).json();
};
