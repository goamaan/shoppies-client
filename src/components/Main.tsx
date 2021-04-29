import { VStack, StackDivider } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MovieThumb } from './ui/MovieThumb';
import { NominatedList } from './ui/NominatedList';
import { SearchBar } from './ui/SearchBar';
import { useQuery } from 'react-query';
import { API_URL, API_KEY } from '../config';
import { ResopnseDto } from '../dto/response.dto';

const fetchMovies = async (searchTerm: string | undefined, page: number) => {
    const moviesEndpoint =
        searchTerm &&
        `${API_URL}/?s=${searchTerm}&page=${page}&apikey=${API_KEY}`;

    return moviesEndpoint && (await (await fetch(moviesEndpoint)).json());
};

const Main: React.FC = ({}) => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const {
        data,
        isFetching,
        isError,
        isLoading,
        error,
        isPreviousData,
    } = useQuery<ResopnseDto, Error>(
        [`movies-${searchTerm}`, page],
        () => fetchMovies(searchTerm, page),
        { keepPreviousData: true },
    );

    return (
        <VStack
            divider={<StackDivider borderColor="blackAlpha.700" />}
            spacing={2}
            align="stretch"
        >
            <NominatedList />
            <SearchBar setSearchTerm={setSearchTerm} />
            {isLoading && 'loading'}
            {isError && 'error'}
            {data && data.Search && (
                <React.Fragment>
                    {data.Search.map((movie) => (
                        <MovieThumb movie={movie} />
                    ))}
                </React.Fragment>
            )}
            <button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 1}
            >
                Previous Page
            </button>
            {searchTerm && data && data.Search && (
                <button
                    onClick={() => {
                        if (!isPreviousData && page <= 100) {
                            setPage((old) => old + 1);
                        }
                    }}
                    disabled={isPreviousData || page > 100}
                >
                    More movies
                </button>
            )}
        </VStack>
    );
};

export { Main };
