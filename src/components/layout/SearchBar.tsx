import { Input } from '@chakra-ui/input';
import { Center } from '@chakra-ui/layout';
import { useSearchStore } from '../../store/searchStore';

export const SearchBar = () => {
    const { searchTerm, setSearchTerm } = useSearchStore();

    const handleChange = (newVal: string) => {
        setSearchTerm(newVal);
    };

    return (
        <Center w="100vw" bg="green.500">
            <Input
                onChange={(e) => handleChange(e.target.value)}
                value={searchTerm}
                type="text"
                textAlign="center"
            />
        </Center>
    );
};
