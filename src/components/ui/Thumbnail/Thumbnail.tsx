import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, Image, Tooltip } from '@chakra-ui/react';
import React from 'react';
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
    const isAdd = type === 'add';
    const label = isAdd ? 'Nominate item' : 'Remove Nomination';
    const icon = isAdd ? (
        <CheckCircleIcon color="gray.600" />
    ) : (
        <DeleteIcon color="white" />
    );

    const HeroContent =
        type === 'add' && alreadyAdded ? (
            <>
                {movie.Poster !== 'N/A' ? (
                    <Tooltip
                        label="Already nominated!"
                        placement="top"
                        color="white"
                        hasArrow
                        background="blackAlpha.500"
                    >
                        <Image
                            alt={movie.Title}
                            src={movie.Poster}
                            rounded="2xl"
                            transition="opacity 0.4s, transform 0.4s"
                            _hover={{ opacity: '0.3' }}
                            maxW={['20vw', '20vw', '15vw', '8vw']}
                        />
                    </Tooltip>
                ) : (
                    <Tooltip
                        label={`${movie.Title} - ${movie.Year}`}
                        placement="top"
                        fontSize="lg"
                        fontWeight="semibold"
                        color="#008060"
                        hasArrow
                        background="#fbf7ed"
                    >
                        <Image
                            alt={movie.Title}
                            src="https://i.imgur.com/Grnb6i8.png"
                            rounded="2xl"
                            transition="opacity 0.4s, transform 0.4s"
                            _hover={{ opacity: '0.3' }}
                            maxW={['20vw', '20vw', '15vw', '8vw']}
                        />
                    </Tooltip>
                )}
            </>
        ) : (
            <>
                <ThumbImage movie={movie} />
                <ThumbButton
                    movie={movie}
                    callback={callback}
                    label={label}
                    Icon={icon}
                    isAdd={isAdd}
                />
            </>
        );

    return (
        <MotionBox
            rounded="md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            minW={['25vw', '20vw', '15vw', '8em']}
            mx={type === 'add' ? '3vw' : '0vw'}
        >
            <Box
                m="4"
                rounded="lg"
                alignItems="center"
                opacity="1"
                display="flex"
                flexDir="column"
                justifyContent="center"
            >
                {HeroContent}
            </Box>
        </MotionBox>
    );
};

export { Thumbnail };
