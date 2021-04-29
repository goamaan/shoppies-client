import { DarkModeSwitch } from '../components/ui/DarkModeSwitch';
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Main } from '../components/Main';

const Index = () => (
    <>
        <DarkModeSwitch />
        <Flex direction="column" mt="10vh">
            <Main />
        </Flex>
    </>
);

export default Index;
