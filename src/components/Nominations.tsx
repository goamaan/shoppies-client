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
        <Flex
            direction="row"
            justifyContent="center"
            flexDir="row"
            overflowX="auto"
            overflowY="hidden"
        >
            {nominations.length === 0 ? (
                <MotionBox
                    color="bg.500"
                    rounded="md"
                    fontSize={['xl', '2xl', '3xl', '5xl']}
                    fontWeight="thin"
                    py="2vh"
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
