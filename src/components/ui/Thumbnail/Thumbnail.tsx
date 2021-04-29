import { CheckCircleIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ResponseStructure } from '../../../dto/response.dto';
import { MotionBox } from '../MotionBox';
import { ThumbButton } from './ThumbButton';
import { ThumbImage } from './ThumbImage';

export type IThumbnailProps = {
    movie: ResponseStructure;
    callback: (item: ResponseStructure) => void;
    type: 'add' | 'remove';
};

const Thumbnail: React.FC<IThumbnailProps> = ({ movie, callback, type }) => {
    const [showButton, setShowButton] = useState(false);
    const isAdd = type === 'add';
    const label = isAdd ? 'Nominate Movie' : 'Remove Nomination';
    const icon = isAdd ? (
        <CheckCircleIcon color="white" />
    ) : (
        <DeleteIcon color="white" />
    );

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
