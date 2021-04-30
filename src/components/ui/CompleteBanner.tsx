import { ScaleFade } from '@chakra-ui/react';
import React from 'react';
import { MotionBox } from './MotionBox';

export type ICompleteBannerProps = {
    isOpen: boolean;
};

const CompleteBanner: React.FC<ICompleteBannerProps> = ({ isOpen }) => {
    return (
        <ScaleFade initialScale={0.9} in={isOpen}>
            <MotionBox
                p="40px"
                color="white"
                mt="4"
                rounded="md"
                shadow="md"
                fontSize="4xl"
                overflow="hidden"
                justifyContent="space-around"
            >
                You have made the maximum of nominations!
            </MotionBox>
        </ScaleFade>
    );
};

export { CompleteBanner };
