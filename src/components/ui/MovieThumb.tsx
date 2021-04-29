import React from 'react';
import { ResponseStructure } from '../../dto/response.dto';
import { useNominationStore } from '../../store/nominationStore';
import { Thumbnail } from './Thumbnail';

export type IMovieThumbProps = {
    movie: ResponseStructure;
};

const MovieThumb: React.FC<IMovieThumbProps> = ({ movie }) => {
    const addNomination = useNominationStore((state) => state.addNomination);

    return <Thumbnail callback={addNomination} movie={movie} type="add" />;
};

export { MovieThumb };
