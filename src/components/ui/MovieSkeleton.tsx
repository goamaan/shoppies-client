import { Skeleton } from '@chakra-ui/react';
import React from 'react';
import { MotionBox } from './MotionBox';

const MovieSkeleton: React.FC = () => {
    return (
        <MotionBox
            w="sm"
            maxW="sm"
            px="1vw"
            justifyContent="space-around"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
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
