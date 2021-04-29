import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../../dto/response.dto';
import { MotionBox } from './MotionBox';

export type IMovieThumbProps = {
    movie: ResponseStructure;
};

const MovieThumb: React.FC<IMovieThumbProps> = ({ movie }) => {
    return (
        <>
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
            >
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
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                ></Box>
            </MotionBox>
        </>
    );
};

export { MovieThumb };
