import {
    Popover,
    PopoverTrigger,
    Button,
    PopoverContent,
    FormControl,
    FormLabel,
    HStack,
    Radio,
    RadioGroup,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Checkbox,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export type ISearchFilterProps = {};

const SearchFilter: React.FC<ISearchFilterProps> = ({}) => {
    const [anyYear, setAnyYear] = useState(true);

    return (
        <Popover closeOnBlur={true} placement="right">
            <>
                <PopoverTrigger>
                    <Button mx="1vw">Filter</Button>
                </PopoverTrigger>
                <PopoverContent p={4} bg="shopify.600">
                    <FormControl as="fieldset">
                        <FormLabel as="legend">Item to search</FormLabel>
                        <RadioGroup defaultValue="movie" colorScheme="purple">
                            <HStack spacing="24px">
                                <Radio value="movie">Movies</Radio>
                                <Radio value="series">Series</Radio>
                            </HStack>
                        </RadioGroup>
                        <FormLabel pt={5}>
                            Year
                            <Checkbox
                                isChecked={anyYear}
                                onChange={(e) => setAnyYear(e.target.checked)}
                                pl={5}
                            >
                                Any Year
                            </Checkbox>
                        </FormLabel>
                        <NumberInput
                            max={2021}
                            min={1920}
                            defaultValue={2021}
                            isDisabled={anyYear}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                </PopoverContent>
            </>
        </Popover>
    );
};

export { SearchFilter };
