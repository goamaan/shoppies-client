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
            rounded="md"
            minW={['25vw', '20vw', '15vw', '8em']}
            mx="3vw"
            overflowX="auto"
            overflowY="hidden"
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
