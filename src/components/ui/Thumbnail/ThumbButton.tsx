import { IconButton } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';
import { ResponseStructure } from '../../../dto/response.dto';

export type IThumbButtonProps = {
    callback: (item: ResponseStructure) => void;
    movie: ResponseStructure;
    label: string;
    Icon: JSX.Element;
    isAdd: boolean;
};

const ThumbButton: React.FC<IThumbButtonProps> = ({
    callback,
    movie,
    label,
    Icon,
    isAdd,
}) => {
    return (
        <>
            <Tooltip
                label={label}
                placement="top"
                hasArrow
                fontSize="md"
                color="white"
                background="blackAlpha.800"
            >
                <IconButton
                    aria-label="Nominate movie"
                    icon={Icon}
                    background={isAdd ? 'shopify.200' : 'red.300'}
                    _hover={{
                        background: isAdd ? 'shopify.400' : 'red.500',
                    }}
                    minW={['20vw', '15vw', '10vw', '8vw']}
                    onClick={() => callback(movie)}
                />
            </Tooltip>
        </>
    );
};

export { ThumbButton };
