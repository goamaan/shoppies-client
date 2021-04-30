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
import React, { useEffect, useRef, useState } from 'react';

export type ISearchFilterProps = {
    setSearchType: React.Dispatch<React.SetStateAction<string>>;
    setSearchYear: React.Dispatch<React.SetStateAction<string>>;
    setAnyYear: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchFilter: React.FC<ISearchFilterProps> = ({
    setAnyYear,
    setSearchType,
    setSearchYear,
}) => {
    const [any, setAny] = useState(true);
    const [radioValue, setRadioValue] = useState('movie');
    const [year, setYear] = useState('2020');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setAnyYear(any);
            setSearchType(radioValue);
            setSearchYear(year);
        }, 750);

        return () => clearTimeout(timer);
    }, [setAnyYear, setSearchType, setSearchYear, any, radioValue, year]);

    return (
        <Popover closeOnBlur={true} placement="right">
            <PopoverTrigger>
                <Button mx="1vw">Filter</Button>
            </PopoverTrigger>

            <PopoverContent
                p={4}
                bg="shopify.600"
                focusBorderColor="shopify.200"
            >
                <FormControl as="fieldset">
                    <FormLabel as="legend">Item to search</FormLabel>
                    <RadioGroup
                        value={radioValue}
                        colorScheme="purple"
                        onChange={setRadioValue}
                    >
                        <HStack spacing="24px">
                            <Radio value="movie">Movies</Radio>
                            <Radio value="series">Series</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormLabel pt={5}>
                        Year
                        <Checkbox
                            isChecked={any}
                            onChange={(e) => setAny(e.target.checked)}
                            pl={5}
                        >
                            Any Year
                        </Checkbox>
                    </FormLabel>
                    <NumberInput
                        max={2021}
                        min={1920}
                        value={year}
                        onChange={setYear}
                        isDisabled={any}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            </PopoverContent>
        </Popover>
    );
};

export { SearchFilter };
