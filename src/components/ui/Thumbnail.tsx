import { SearchIcon, CheckCircleIcon } from '@chakra-ui/icons';
import { Tooltip, Box, Image, Button, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ResponseStructure } from '../../dto/response.dto';
import { MotionBox } from './MotionBox';

export type IThumbnailProps = {
    movie: ResponseStructure;
    callback: (item: ResponseStructure) => void;
    type: 'add' | 'remove';
};

const Thumbnail: React.FC<IThumbnailProps> = ({ movie, callback, type }) => {
    const [showButton, setShowButton] = useState(false);

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
            flexBasis="10%"
        >
            <MotionBox
                onHoverStart={() => setShowButton(true)}
                onHoverEnd={() => setShowButton(false)}
            >
                <Box
                    m="4"
                    rounded="lg"
                    h="100%"
                    alignItems="center"
                    opacity="1"
                >
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
                    {showButton && (
                        <Tooltip
                            label="Nominate"
                            placement="top"
                            hasArrow
                            fontSize="md"
                            color="white"
                            background="blackAlpha.800"
                        >
                            <IconButton
                                aria-label="Nominate movie"
                                icon={<CheckCircleIcon color="blue.600" />}
                                zIndex={2}
                                color="shopify.300"
                                background="white"
                                _hover={{
                                    background: 'shopify.300',
                                }}
                                position="absolute"
                                width="5em"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%);"
                                onClick={() => callback(movie)}
                            />
                        </Tooltip>
                    )}
                </Box>
            </MotionBox>
        </MotionBox>
    );
};

export { Thumbnail };
