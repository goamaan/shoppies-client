import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Main } from '../components/Main';
import { Navbar } from '../components/ui/Navbar';

const Index = () => (
    <>
        {/* <DarkModeSwitch /> */}
        <Navbar />
        <Flex direction="column" mt="10vh">
            <Main />
        </Flex>
    </>
);

export default Index;
