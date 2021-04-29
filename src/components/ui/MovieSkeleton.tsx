import { Skeleton } from '@chakra-ui/react';
import React from 'react';
import { MotionBox } from './MotionBox';

const MovieSkeleton: React.FC = () => {
    return (
        <MotionBox
            w="sm"
            rounded="lg"
            overflow="hidden"
            justifyContent="space-around"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
        >
            <Skeleton h="30vh"></Skeleton>
        </MotionBox>
    );
};

export { MovieSkeleton };
