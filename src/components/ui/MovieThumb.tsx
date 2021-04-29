import { Box, Image, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../../dto/response.dto';
import { useNominationStore } from '../../store/nominationStore';
import { MotionBox } from './MotionBox';

export type IMovieThumbProps = {
    movie: ResponseStructure;
};

const MovieThumb: React.FC<IMovieThumbProps> = ({ movie }) => {
    const addNomination = useNominationStore((state) => state.addNomination);

    return (
        <MotionBox
            w="sm"
            maxW="sm"
            h="25vh"
            maxH="30vh"
            rounded="md"
            overflow="hidden"
            justifyContent="space-around"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            _hover={{}}
            onClick={() => addNomination(movie)}
        >
            <Tooltip label={movie.Title} placement="top">
                <Box>
                    <Box
                        m="4"
                        rounded="lg"
                        h="100%"
                        // width={['0%', '0%', '50%', '100%']}
                        alignItems="center"
                    >
                        {movie.Poster ? (
                            <Image
                                alt={movie.Title}
                                w="100%"
                                src={movie.Poster}
                                rounded="2xl"
                            />
                        ) : (
                            <Box bg="gray.200" h="100%" />
                        )}
                    </Box>
                </Box>
            </Tooltip>
        </MotionBox>
    );
};

export { MovieThumb };
