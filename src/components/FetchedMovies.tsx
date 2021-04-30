import React from 'react';
import { ResponseDto } from '../dto/response.dto';
import { FoundMovie } from './ui/FoundMovie';

export type IFetchedMoviesProps = {
    data?: ResponseDto;
};

const FetchedMovies: React.FC<IFetchedMoviesProps> = ({ data }) => {
    return (
        <>
            {data && data.Search && (
                <React.Fragment>
                    {data.Search.map((movie) => (
                        <FoundMovie movie={movie} />
                    ))}
                </React.Fragment>
            )}
        </>
    );
};

export { FetchedMovies };