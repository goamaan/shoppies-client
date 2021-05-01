import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../dto/response.dto';
import { NominatedMovie } from './ui/NominatedMovie';

export type INominationsProps = {
    nominations: ResponseStructure[];
};

const Nominations: React.FC<INominationsProps> = ({ nominations }) => {
    return (
        <Flex direction="row" justify="center" flexBasis="30vh">
            {nominations.map((nomination) => (
                <NominatedMovie
                    key={nomination.imdbID}
                    nomination={nomination}
                />
            ))}
        </Flex>
    );
};

export { Nominations };
