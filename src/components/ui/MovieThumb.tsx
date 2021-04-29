import React from 'react';
import { ResponseStructure } from '../../dto/response.dto';

export type IMovieThumbProps = {
    movie: ResponseStructure;
};

const MovieThumb: React.FC<IMovieThumbProps> = ({ movie }) => {
    return (
        <React.Fragment>
            <div>{movie.Title}</div>
        </React.Fragment>
    );
};

export { MovieThumb };
