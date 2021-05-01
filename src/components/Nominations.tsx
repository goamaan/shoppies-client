import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../dto/response.dto';
import { MotionBox } from './ui/MotionBox';
import { NominatedMovie } from './ui/NominatedMovie';

export type INominationsProps = {
    nominations: ResponseStructure[];
};

const Nominations: React.FC<INominationsProps> = ({ nominations }) => {
    return (
        <Flex direction="row" justify="center" flexBasis="30vh">
            {nominations.length === 0 ? (
                <MotionBox
                    p="40px"
                    color="bg.500"
                    mt="4"
                    rounded="md"
                    fontSize="5xl"
                    fontWeight="thin"
                    overflow="hidden"
                    justifyContent="space-around"
                >
                    Your nominees will appear here
                </MotionBox>
            ) : (
                nominations.map((nomination) => (
                    <NominatedMovie
                        key={nomination.imdbID}
                        nomination={nomination}
                    />
                ))
            )}
        </Flex>
    );
};

export { Nominations };
