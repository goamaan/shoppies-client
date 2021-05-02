import { Flex } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../dto/response.dto';
import { MotionBox } from './ui/MotionBox';
import { NominatedMovie } from './ui/NominatedMovie';
import SimpleBar from 'simplebar-react';

export type INominationsProps = {
    nominations: ResponseStructure[];
};

const Nominations: React.FC<INominationsProps> = ({ nominations }) => {
    return (
        <SimpleBar
            style={{
                width: '70vw',
                overflowX: 'auto',
                overflowY: 'hidden',
            }}
        >
            <Flex
                direction="row"
                justifyContent="center"
                flexDir="row"
                alignItems="center"
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
        </SimpleBar>
    );
};

export { Nominations };
