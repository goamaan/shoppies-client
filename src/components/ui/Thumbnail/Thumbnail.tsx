import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Image, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ResponseStructure } from '../../../dto/response.dto';
import { MotionBox } from '../MotionBox';
import { ThumbButton } from './ThumbButton';
import { ThumbImage } from './ThumbImage';

export type IThumbnailProps = {
    movie: ResponseStructure;
    callback: (item: ResponseStructure) => void;
    type: 'add' | 'remove';
    alreadyAdded?: boolean;
};

const Thumbnail: React.FC<IThumbnailProps> = ({
    movie,
    callback,
    type,
    alreadyAdded,
}) => {
    const [showButton, setShowButton] = useState(false);
    const isAdd = type === 'add';
    const label = isAdd ? 'Nominate item' : 'Remove Nomination';
    const icon = isAdd ? (
        <CheckCircleIcon color="white" />
    ) : (
        <DeleteIcon color="white" />
    );

    if (type === 'add' && alreadyAdded) {
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
                            label="Already nominated!"
                            placement="top"
                            color="white"
                            hasArrow
                            background="blackAlpha.500"
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
                </Box>
            </MotionBox>
        );
    }

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
            onHoverStart={() => setShowButton(true)}
            onHoverEnd={() => setShowButton(false)}
        >
            <MotionBox>
                <Box
                    m="4"
                    rounded="lg"
                    h="100%"
                    alignItems="center"
                    opacity="1"
                >
                    <ThumbImage movie={movie} />
                    <ThumbButton
                        movie={movie}
                        callback={callback}
                        label={label}
                        showButton={showButton}
                        Icon={icon}
                        isAdd={isAdd}
                    />
                </Box>
            </MotionBox>
        </MotionBox>
    );
};

export { Thumbnail };
