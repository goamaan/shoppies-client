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
import { MotionBox } from './ui/MotionBox';
import { useSearchStore } from '../store/searchStore';

const Main: React.FC = ({}) => {
    const toast = useToast();
    const [page, setPage] = useState(1);
    const searchTerm = useSearchStore((state) => state.searchTerm);
    const searchType = useSearchStore((state) => state.searchType);
    const searchYear = useSearchStore((state) => state.searchYear);
    const anyYear = useSearchStore((state) => state.anyYear);
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
            flexBasis="30vh"
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
            <MotionBox
                color="bg.500"
                rounded="md"
                fontSize={['lg', 'xl', '2xl', '3xl']}
                fontWeight="thin"
                textAlign="center"
                display="flex"
                justifyContent="center"
                flexDir="row"
                alignItems="center"
                pt="1vh"
            >
                Your nominations
            </MotionBox>
            <Flex
                justifyContent="center"
                pt="4vh"
                alignItems="center"
                flexBasis="35vh"
            >
                <Nominations nominations={nominations} />
            </Flex>
            <SearchBar />
            {HeroContent}
        </Flex>
    );
};

export { Main };
