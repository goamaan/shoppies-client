import { VStack, StackDivider, HStack, Button, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { MovieThumb } from './ui/MovieThumb';
import { NominatedList } from './ui/NominatedList';
import { SearchBar } from './ui/SearchBar';
import { useQuery } from 'react-query';
import { API_URL, API_KEY } from '../config';
import { ResopnseDto } from '../dto/response.dto';
import { MovieSkeleton } from './ui/MovieSkeleton';

const fetchMovies = async (searchTerm: string, page: number) => {
    const moviesEndpoint =
        searchTerm &&
        `${API_URL}/?s=${searchTerm}&page=${page}&apikey=${API_KEY}`;

    return moviesEndpoint && (await (await fetch(moviesEndpoint)).json());
};

const Main: React.FC = ({}) => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const { data, isError, isLoading, isPreviousData, isFetching } = useQuery<
        ResopnseDto,
        Error
    >(
        [`movies-${searchTerm}`, page],
        () => fetchMovies(searchTerm.trim().toLowerCase(), page),
        {
            keepPreviousData: true,
        },
    );

    return (
        <Flex direction="column" justifyContent="space-around" height="70vh">
            {/* <NominatedList /> */}
            <HStack>
                {Array.apply(null, Array(10)).map(() => (
                    <MovieSkeleton />
                ))}
            </HStack>
            <SearchBar setSearchTerm={setSearchTerm} />
            {isLoading && 'loading'}

            <HStack>
                {isLoading || isFetching
                    ? Array.apply(null, Array(10)).map(() => <MovieSkeleton />)
                    : data &&
                      data.Search && (
                          <React.Fragment>
                              {data.Search.map((movie) => (
                                  <MovieThumb movie={movie} />
                              ))}
                          </React.Fragment>
                      )}
            </HStack>
            {/* <Button
                onClick={() => setPage((old) => Math.max(old - 1, 0))}
                disabled={page === 1}
            >
                Previous Page
            </Button>
            {searchTerm && data && data.Search && (
                <Button
                    onClick={() => {
                        if (!isPreviousData && page <= 100) {
                            setPage((old) => old + 1);
                        }
                    }}
                    disabled={
                        data.Search.length < 10 || isPreviousData || page > 100
                    }
                    isLoading={isLoading}
                >
                    Next page
                </Button>
            )} */}
        </Flex>
    );
};

export { Main };
