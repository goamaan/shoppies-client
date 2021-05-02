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

    const HeroContent =
        type === 'add' && alreadyAdded ? (
            <>
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
                            src={movie.Poster}
                            rounded="2xl"
                            transition="opacity 0.4s, transform 0.4s"
                            _hover={{ opacity: '0.3' }}
                            maxW={['20vw', '20vw', '20vw', '10vw']}
                        />
                    </Tooltip>
                ) : (
                    <Box bg="gray.200" />
                )}
            </>
        ) : (
            <>
                <ThumbImage movie={movie} />
                <ThumbButton
                    movie={movie}
                    callback={callback}
                    label={label}
                    showButton={showButton}
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
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => setShowButton(true)}
            onHoverEnd={() => setShowButton(false)}
            minW={['25vw', '20vw', '15vw', '8em']}
            mx="3vw"
        >
            <Box m="4" rounded="lg" alignItems="center" opacity="1">
                {HeroContent}
            </Box>
        </MotionBox>
    );
};

export { Thumbnail };
