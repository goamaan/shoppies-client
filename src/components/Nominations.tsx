import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../dto/response.dto';
import { NominatedMovie } from './ui/NominatedMovie';
import SimpleBar from 'simplebar-react';

export type INominationsProps = {
    nominations: ResponseStructure[];
};

const Nominations: React.FC<INominationsProps> = ({ nominations }) => {
    console.log(
        nominations
            .map((nom) => nom.imdbID)
            .join('')
            .split('tt'),
    );

    return (
        <SimpleBar
            style={{
                width: '50vw',
                overflowX: 'auto',
                overflowY: 'hidden',
            }}
        >
            <Flex>
                {nominations.map((nomination) => (
                    <NominatedMovie
                        key={nomination.imdbID}
                        nomination={nomination}
                    />
                ))}
            </Flex>
        </SimpleBar>
    );
};

export { Nominations };
