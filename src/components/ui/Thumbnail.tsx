import { Tooltip, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../../dto/response.dto';
import { MotionBox } from './MotionBox';

export type IThumbnailProps = {
    movie: ResponseStructure;
    callback: (item: ResponseStructure) => void;
    type: string;
};

const Thumbnail: React.FC<IThumbnailProps> = ({ movie, callback, type }) => {
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
            onClick={() => callback(movie)}
        >
            <Tooltip label={movie.Title} placement="top">
                <Box>
                    <Box m="4" rounded="lg" h="100%" alignItems="center">
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

export { Thumbnail };
