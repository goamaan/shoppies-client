import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { ResponseDto } from '../dto/response.dto';
import { FoundMovie } from './ui/FoundMovie';

export type IFetchedMoviesProps = {
    data?: ResponseDto;
};

const FetchedMovies: React.FC<IFetchedMoviesProps> = ({ data }) => {
    console.log(data?.Search);

    return (
        <>
            {data && data.Search && (
                <Flex flexDir="row" overflowX="auto" overflowY="hidden">
                    {data.Search.map((movie) => (
                        <FoundMovie key={movie.imdbID} movie={movie} />
                    ))}
                </Flex>
            )}
        </>
    );
};

export { FetchedMovies };
