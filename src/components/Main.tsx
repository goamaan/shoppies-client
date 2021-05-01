import { Flex, useToast, useDisclosure, IconButton } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SearchBar } from './ui/SearchBar/SearchBar';
import { useQuery } from 'react-query';
import { ResponseDto } from '../dto/response.dto';
import { MovieSkeleton } from './ui/MovieSkeleton';
import { useNominationStore } from '../store/nominationStore';
import { Nominations } from './Nominations';
import { FetchedMovies } from './FetchedMovies';
import { CompleteBanner } from './ui/CompleteBanner';
import { fetchMovies } from '../api-fetch';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
const Main: React.FC = ({}) => {
    const toast = useToast();
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('movie');
    const [searchYear, setSearchYear] = useState('2020');
    const [anyYear, setAnyYear] = useState(true);
    const nominations = useNominationStore((state) => state.nominations);
    const { isOpen: isBannerOpen, onOpen, onClose } = useDisclosure();
    const toastId = 'nomination-toast';

    const { data, isLoading, isPreviousData, isFetching } = useQuery<
        ResponseDto,
        Error
    >(
        [
            `movies-${searchTerm}-${searchYear}-${anyYear}`,
            page,
            searchType,
            searchYear,
            anyYear,
        ],
        () =>
            fetchMovies(
                searchTerm.trim().toLowerCase(),
                page,
                searchType,
                searchYear,
                anyYear,
            ),
        {
            keepPreviousData: true,
        },
    );

    useEffect(() => {
        if (!toast.isActive(toastId)) {
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
        }
    }, [nominations]);

    if (isBannerOpen) {
        return (
            <Flex
                direction="column"
                justifyContent="space-around"
                flexBasis="auto"
            >
                <Nominations nominations={nominations} />
                <SearchBar
                    setSearchTerm={setSearchTerm}
                    setSearchType={setSearchType}
                    setSearchYear={setSearchYear}
                    setAnyYear={setAnyYear}
                />
                <Flex
                    direction="row"
                    flexBasis="30vh"
                    justifyContent="center"
                    pt="10vh"
                >
                    <CompleteBanner isOpen={isBannerOpen} />
                </Flex>
            </Flex>
        );
    }

    return (
        <Flex direction="column" justifyContent="space-around" flexBasis="auto">
            <Nominations nominations={nominations} />
            <SearchBar
                setSearchTerm={setSearchTerm}
                setSearchType={setSearchType}
                setSearchYear={setSearchYear}
                setAnyYear={setAnyYear}
            />
            <Flex
                direction="row"
                flexBasis="30vh"
                justifyContent="center"
                pt="10vh"
            >
                {searchTerm && data && data.Search && (
                    <IconButton
                        h="25vh"
                        w="3vw"
                        onClick={() => setPage((old) => Math.max(old - 1, 0))}
                        disabled={page === 1}
                        bg="blackAlpha.500"
                        _hover={{ bg: 'blackAlpha.600' }}
                        icon={<ArrowBackIcon />}
                        aria-label={`Next page`}
                        size="lg"
                    >
                        {`⇦`}
                    </IconButton>
                )}
                {isLoading || isFetching ? (
                    Array.apply(null, Array(10)).map((_, i) => (
                        <MovieSkeleton key={i} />
                    ))
                ) : (
                    <FetchedMovies data={data} />
                )}
                {searchTerm && data && data.Search && (
                    <IconButton
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
                        bg="blackAlpha.500"
                        _hover={{ bg: 'blackAlpha.600' }}
                        icon={<ArrowForwardIcon />}
                        size="lg"
                        aria-label={`Next page`}
                    >
                        {`⇨`}
                    </IconButton>
                )}
            </Flex>
        </Flex>
    );
};

export { Main };
