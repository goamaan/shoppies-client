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
                color="bg.800"
                mt="4"
                rounded="md"
                fontSize={['2em', '2em', '2em', '5em']}
                fontWeight="hairline"
                overflow="hidden"
                justifyContent="space-around"
            >
                Remove nominations to choose more
            </MotionBox>
        </ScaleFade>
    );
};

export { CompleteBanner };
