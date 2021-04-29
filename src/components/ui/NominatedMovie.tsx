import { REMOVE_MOVIE } from '../../constants';
import { ResponseStructure } from '../../dto/response.dto';
import { useNominationStore } from '../../store/nominationStore';
import { Thumbnail } from './Thumbnail/Thumbnail';

export type INominatedMovie = {
    nomination: ResponseStructure;
};

const NominatedMovie: React.FC<INominatedMovie> = ({ nomination }) => {
    const removeNomination = useNominationStore(
        (state) => state.removeNomination,
    );

    return (
        <Thumbnail
            callback={removeNomination}
            movie={nomination}
            type={REMOVE_MOVIE}
        />
    );
};

export { NominatedMovie };
