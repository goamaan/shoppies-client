import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { ResponseDto } from '../../dto/response.dto';

export type IPageButtonsProps = {
    searchTerm: string;
    data?: ResponseDto;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    isPreviousData: boolean;
    page: number;
};

const PageButtons: React.FC<IPageButtonsProps> = ({
    isPreviousData,
    page,
    searchTerm,
    setPage,
    children,
    data,
}) => {
    return (
        <>
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
            {children}
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
                        data.Search.length < 10 || isPreviousData || page >= 100
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
        </>
    );
};

export { PageButtons };
