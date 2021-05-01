import { Input } from '@chakra-ui/input';
import { Flex, Text } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';
import { MotionBox } from '../MotionBox';
import { SearchFilter } from './SearchFilter';

export type ISearchBarProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    setSearchType: React.Dispatch<React.SetStateAction<string>>;
    setSearchYear: React.Dispatch<React.SetStateAction<string>>;
    setAnyYear: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBar: React.FC<ISearchBarProps> = ({
    setSearchTerm,
    setAnyYear,
    setSearchType,
    setSearchYear,
}) => {
    const [search, setSearch] = useState('');
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
        <Flex direction="column" alignItems="center" mt="4vh">
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
                <SearchFilter
                    setSearchType={setSearchType}
                    setSearchYear={setSearchYear}
                    setAnyYear={setAnyYear}
                />
            </MotionBox>
            <Text
                p="3vh"
                color="bg.300"
                fontSize={['1em', '1.5em']}
                fontWeight="hairline"
            >
                Hover over movies to see details
            </Text>
        </Flex>
    );
};

export { SearchBar };
