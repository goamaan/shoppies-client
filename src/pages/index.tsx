import { DarkModeSwitch } from '../components/layout/DarkModeSwitch';
import { NominatedList } from '../components/layout/NominatedList';
import { SearchBar } from '../components/layout/SearchBar';
import { MovieList } from '../components/layout/MovieList';
import React from 'react';
import { Flex, StackDivider, VStack } from '@chakra-ui/react';

const Index = () => (
    <>
        <DarkModeSwitch />
        <Flex direction="column" mt="10vh">
            <VStack
                divider={<StackDivider borderColor="blackAlpha.700" />}
                spacing={2}
                align="stretch"
            >
                <NominatedList />
                <SearchBar />
                <MovieList />
            </VStack>
        </Flex>
    </>
);

export default Index;
