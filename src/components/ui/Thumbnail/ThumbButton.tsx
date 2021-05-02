import { IconButton } from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/tooltip';
import React from 'react';
import { ResponseStructure } from '../../../dto/response.dto';

export type IThumbButtonProps = {
    showButton: boolean;
    callback: (item: ResponseStructure) => void;
    movie: ResponseStructure;
    label: string;
    Icon: JSX.Element;
    isAdd: boolean;
};

const ThumbButton: React.FC<IThumbButtonProps> = ({
    showButton,
    callback,
    movie,
    label,
    Icon,
    isAdd,
}) => {
    return (
        <>
            {showButton && (
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
                        zIndex={2}
                        background={isAdd ? 'shopify.200' : 'red.300'}
                        _hover={{
                            background: isAdd ? 'shopify.400' : 'red.500',
                        }}
                        position="absolute"
                        width={['2em', '5em']}
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%);"
                        onClick={() => callback(movie)}
                    />
                </Tooltip>
            )}
        </>
    );
};

export { ThumbButton };
