import { ResponseStructure } from '../../dto/response.dto';

export type INominatedMovie = {
    nomination: ResponseStructure;
};

const NominatedMovie: React.FC<INominatedMovie> = ({ nomination }) => {
    return <div>{nomination.Title}</div>;
};

export { NominatedMovie };
