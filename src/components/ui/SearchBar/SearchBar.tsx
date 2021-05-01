import { Input } from '@chakra-ui/input';
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
                placeholder="Search for a movie/series to nominate..."
                variant="filled"
                p="1.2vw"
                bg="blackAlpha.400"
                color="shopify.200"
                zIndex={2}
                fontSize="2xl"
                focusBorderColor="shopify.200"
            />
            <SearchFilter
                setSearchType={setSearchType}
                setSearchYear={setSearchYear}
                setAnyYear={setAnyYear}
            />
        </MotionBox>
    );
};

export { SearchBar };
