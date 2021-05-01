import { Flex, useToast, useDisclosure } from '@chakra-ui/react';
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
import { PageButtons } from './ui/PageButtons';

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

    const HeroContent = isBannerOpen ? (
        <Flex
            flexDir="row"
            overflowX="auto"
            overflowY="hidden"
            justifyContent="center"
        >
            <CompleteBanner isOpen={isBannerOpen} />
        </Flex>
    ) : (
        <Flex
            direction="row"
            justifyContent="space-between"
            mt="4vh"
            flexBasis="35vh"
        >
            <PageButtons
                isPreviousData={isPreviousData}
                page={page}
                searchTerm={searchTerm}
                setPage={setPage}
                data={data}
            >
                {isLoading || isFetching ? (
                    Array.apply(null, Array(10)).map((_, i) => (
                        <MovieSkeleton key={i} />
                    ))
                ) : (
                    <FetchedMovies data={data} />
                )}
            </PageButtons>
        </Flex>
    );

    return (
        <Flex direction="column" justifyContent="space-between">
            <Flex
                direction="row"
                justifyContent="center"
                pt="4vh"
                alignItems="center"
                flexBasis="30vh"
            >
                <Nominations nominations={nominations} />
            </Flex>
            <SearchBar
                setSearchTerm={setSearchTerm}
                setSearchType={setSearchType}
                setSearchYear={setSearchYear}
                setAnyYear={setAnyYear}
            />
            {HeroContent}
        </Flex>
    );
};

export { Main };
