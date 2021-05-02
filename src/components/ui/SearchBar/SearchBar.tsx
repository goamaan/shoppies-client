import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';
import { useSearchStore } from '../../../store/searchStore';
import { MotionBox } from '../MotionBox';
import { SearchFilter } from './SearchFilter';

export type ISearchBarProps = {};

const SearchBar: React.FC<ISearchBarProps> = () => {
    const [search, setSearch] = useState('');
    const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(search);
        }, 750);

        return () => clearTimeout(timer);
    }, [setSearchTerm, search]);

    return (
        <Flex direction="column" alignItems="center" mt="3vh">
            <MotionBox
                w="50vw"
                alignSelf="center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Input
                    type="text"
                    textAlign="center"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search for a movie/series..."
                    _placeholder={{ fontSize: ['xs', 'xl'] }}
                    variant="filled"
                    p="1.2vw"
                    bg="blackAlpha.400"
                    color="shopify.200"
                    zIndex={2}
                    fontSize={['lg', 'xl']}
                    focusBorderColor="shopify.200"
                />
                <SearchFilter />
            </MotionBox>
            <Text
                p="3vh"
                color="bg.300"
                fontSize={['1em', '1.5em']}
                fontWeight="hairline"
            >
                Hover over movies to see details | Scroll to see more movies |
                Use side buttons to fetch next/previous results
            </Text>
        </Flex>
    );
};

export { SearchBar };
