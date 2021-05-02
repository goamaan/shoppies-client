import { Skeleton } from '@chakra-ui/react';
import React from 'react';
import { MotionBox } from './MotionBox';

const MovieSkeleton: React.FC = () => {
    return (
        <MotionBox
            rounded="md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            minW={['25vw', '20vw', '15vw', '8em']}
        >
            <Skeleton
                h="25vh"
                rounded="2xl"
                startColor="shopify.900"
            ></Skeleton>
        </MotionBox>
    );
};

export { MovieSkeleton };
