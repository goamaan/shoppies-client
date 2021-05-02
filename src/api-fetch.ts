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
    let endpoint;
    if (anyYear) {
        endpoint = `${API_URL}/?s=${searchTerm}&type=${searchType}&page=${page}&apikey=${API_KEY}`;
    } else {
        endpoint = `${API_URL}/?s=${searchTerm}&type=${searchType}&y=${searchYear}&page=${page}&apikey=${API_KEY}`;
    }

    return endpoint && (await fetch(endpoint)).json();
};

// export const fetchUsingId = async (ids?: string[]) => {
//     if (ids === null || ids === undefined) {
//         return;
//     }
//     let endpoint: string;
//     let results: any[] = [];
//     ids.forEach(async (id) => {
//         endpoint = `${API_URL}/?i=${id}&apikey=${API_KEY}`;
//         const res = (await fetch(endpoint)).json();
//         results.push(res);
//     });

//     console.log(results);

//     return results;
// };
