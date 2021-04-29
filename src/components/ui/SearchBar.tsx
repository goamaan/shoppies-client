import { Input } from '@chakra-ui/input';
import { useEffect, useRef, useState } from 'react';
import { MotionBox } from './MotionBox';

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
        }, 750);

        return () => clearTimeout(timer);
    }, [setSearchTerm, search]);

    return (
        <MotionBox
            w="50vw"
            alignSelf="center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
        >
            <Input
                type="text"
                textAlign="center"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search for a movie to nominate..."
                variant="flushed"
                // textColor={textColor}
                color="shopify.200"
                zIndex={2}
                fontSize="2xl"
            />
        </MotionBox>
    );
};

export { SearchBar };
