import React from 'react';
import { ADD_MOVIE } from '../../constants';
import { ResponseStructure } from '../../dto/response.dto';
import { useNominationStore } from '../../store/nominationStore';
import { Thumbnail } from './Thumbnail';

export type IFoundMovieProps = {
    movie: ResponseStructure;
};

const FoundMovie: React.FC<IFoundMovieProps> = ({ movie }) => {
    const addNomination = useNominationStore((state) => state.addNomination);

    return (
        <Thumbnail callback={addNomination} movie={movie} type={ADD_MOVIE} />
    );
};

export { FoundMovie };
