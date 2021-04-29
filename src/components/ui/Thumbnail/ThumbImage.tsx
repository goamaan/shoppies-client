import { Tooltip, Box, Image } from '@chakra-ui/react';
import React from 'react';
import { ResponseStructure } from '../../../dto/response.dto';

export type IThumbImageProps = {
    movie: ResponseStructure;
};

const ThumbImage: React.FC<IThumbImageProps> = ({ movie }) => {
    return (
        <>
            {movie.Poster ? (
                <Tooltip
                    label={movie.Title}
                    placement="top"
                    fontSize="lg"
                    fontWeight="bold"
                    color="#008060"
                    hasArrow
                    background="#fbf7ed"
                >
                    <Image
                        alt={movie.Title}
                        w="100%"
                        src={movie.Poster}
                        rounded="2xl"
                        transition="opacity 0.4s, transform 0.4s"
                        _hover={{ opacity: '0.3' }}
                    />
                </Tooltip>
            ) : (
                <Box bg="gray.200" h="100%" />
            )}
        </>
    );
};

export { ThumbImage };
