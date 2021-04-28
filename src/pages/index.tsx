import { DarkModeSwitch } from '../components/layout/DarkModeSwitch';
import { NominatedList } from '../components/layout/NominatedList';
import { SearchBar } from '../components/layout/SearchBar';
import { MovieList } from '../components/layout/MovieList';
import React from 'react';
import { Flex } from '@chakra-ui/react';

const Index = () => (
    <Flex direction="column" mt="10vh">
        <DarkModeSwitch />
        <NominatedList />
        <SearchBar />
        <MovieList />
    </Flex>
);

export default Index;
