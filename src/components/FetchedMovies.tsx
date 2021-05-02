import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { ResponseDto } from '../dto/response.dto';
import { FoundMovie } from './ui/FoundMovie';
import SimpleBar from 'simplebar-react';

export type IFetchedMoviesProps = {
    data?: ResponseDto;
};

const FetchedMovies: React.FC<IFetchedMoviesProps> = ({ data }) => {
    return (
        <>
            {data && data.Search && (
                <SimpleBar
                    forceVisible="y"
                    style={{
                        width: '70vw',
                        overflowY: 'hidden',
                    }}
                >
                    <Flex flexDir="row" alignItems="center">
                        {data.Search.map((movie) => (
                            <FoundMovie key={movie.imdbID} movie={movie} />
                        ))}
                    </Flex>
                </SimpleBar>
            )}
        </>
    );
};

export { FetchedMovies };
