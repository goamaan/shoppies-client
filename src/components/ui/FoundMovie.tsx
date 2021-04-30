import React from 'react';
import { ADD_MOVIE } from '../../constants';
import { ResponseStructure } from '../../dto/response.dto';
import { useNominationStore } from '../../store/nominationStore';
import { Thumbnail } from './Thumbnail/Thumbnail';

export type IFoundMovieProps = {
    movie: ResponseStructure;
};

const FoundMovie: React.FC<IFoundMovieProps> = ({ movie }) => {
    const addNomination = useNominationStore((state) => state.addNomination);
    const nominations = useNominationStore((state) => state.nominations);
    const alreadyAdded = nominations.some(
        (curr) => curr.imdbID === movie.imdbID,
    );

    return (
        <Thumbnail
            callback={addNomination}
            movie={movie}
            type={ADD_MOVIE}
            alreadyAdded={alreadyAdded}
        />
    );
};

export { FoundMovie };
