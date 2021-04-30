import { Flex, Button, useToast, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SearchBar } from './ui/SearchBar/SearchBar';
import { useQuery } from 'react-query';
import { API_URL, API_KEY } from '../config';
import { ResponseDto } from '../dto/response.dto';
import { MovieSkeleton } from './ui/MovieSkeleton';
import { useNominationStore } from '../store/nominationStore';
import { Nominations } from './Nominations';
import { FetchedMovies } from './FetchedMovies';
import { CompleteBanner } from './ui/CompleteBanner';

const fetchMovies = async (searchTerm: string, page: number) => {
    const moviesEndpoint =
        searchTerm &&
        `${API_URL}/?s=${searchTerm}&page=${page}&apikey=${API_KEY}`;

    return moviesEndpoint && (await (await fetch(moviesEndpoint)).json());
};

const Main: React.FC = ({}) => {
    const toast = useToast();
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const nominations = useNominationStore((state) => state.nominations);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data, isLoading, isPreviousData, isFetching } = useQuery<
        ResponseDto,
        Error
    >(
        [`movies-${searchTerm}`, page],
        () => fetchMovies(searchTerm.trim().toLowerCase(), page),
        {
            keepPreviousData: true,
        },
    );

    useEffect(() => {
        if (nominations.length === 5) {
            toast({
                title: "You've nominated 5 movies!",
                description:
                    'Get a shareable link to share it with your friends!',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: 'top',
            });
            onOpen();
        } else {
            onClose();
        }
    }, [nominations, isOpen]);

    if (isOpen) {
        return (
            <Flex
                direction="column"
                justifyContent="space-around"
                height="70vh"
            >
                <Nominations nominations={nominations} />
                <SearchBar setSearchTerm={setSearchTerm} />
                <Flex direction="row" flexBasis={5} justifyContent="center">
                    <CompleteBanner isOpen={isOpen} />
                </Flex>
            </Flex>
        );
    }

    return (
        <Flex direction="column" justifyContent="space-around" height="70vh">
            <Nominations nominations={nominations} />
            <SearchBar setSearchTerm={setSearchTerm} />
            <Flex direction="row" flexBasis={5} justifyContent="center">
                {searchTerm && data && data.Search && (
                    <Button
                        h="25vh"
                        w="3vw"
                        onClick={() => setPage((old) => Math.max(old - 1, 0))}
                        disabled={page === 1}
                    >
                        {`⇦`}
                    </Button>
                )}
                {isLoading || isFetching ? (
                    Array.apply(null, Array(10)).map(() => <MovieSkeleton />)
                ) : (
                    <FetchedMovies data={data} />
                )}
                {searchTerm && data && data.Search && (
                    <Button
                        h="25vh"
                        w="3vw"
                        onClick={() => {
                            if (!isPreviousData && page <= 100) {
                                setPage((old) => old + 1);
                            }
                        }}
                        disabled={
                            data.Search.length < 10 ||
                            isPreviousData ||
                            page >= 100
                        }
                    >
                        {`⇨`}
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};

export { Main };
