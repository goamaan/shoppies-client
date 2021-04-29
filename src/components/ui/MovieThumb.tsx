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
                rounded="lg"
                overflow="hidden"
                justifyContent="space-around"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            >
                <Box m="4" rounded="lg" h="100%">
                    {movie.Poster ? (
                        <Image alt={movie.Title} w="100%" src={movie.Poster} />
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