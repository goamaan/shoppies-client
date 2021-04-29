import { Input } from '@chakra-ui/input';
import { Center } from '@chakra-ui/layout';
import { useEffect, useRef, useState } from 'react';

// export type ISearchBarProps = {
//     searchTerm: React.RefObject<HTMLInputElement>;
// };

export type ISearchBarProps = {
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<ISearchBarProps> = ({ setSearchTerm }) => {
    const [search, setSearch] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(search);
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, search]);

    return (
        <Center w="100vw" bg="green.500">
            <Input
                type="text"
                textAlign="center"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </Center>
    );
};

export { SearchBar };
