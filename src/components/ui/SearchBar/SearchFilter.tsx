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
import { useSearchStore } from '../../../store/searchStore';

export type ISearchFilterProps = {
    // setSearchType: React.Dispatch<React.SetStateAction<string>>;
    // setSearchYear: React.Dispatch<React.SetStateAction<string>>;
    // setAnyYear: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchFilter: React.FC<ISearchFilterProps> = (
    {
        // setAnyYear,
        // setSearchType,
        // setSearchYear,
    },
) => {
    const [any, setAny] = useState(true);
    const [radioValue, setRadioValue] = useState('movie');
    const [year, setYear] = useState('2020');
    const initial = useRef(true);
    const initRef = React.useRef(null);
    const setSearchType = useSearchStore((state) => state.setSearchType);
    const setSearchYear = useSearchStore((state) => state.setSearchYear);
    const setAnyYear = useSearchStore((state) => state.setAnyYear);

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
        <Popover
            closeOnBlur={true}
            placement="top-start"
            initialFocusRef={initRef}
            size="md"
        >
            <PopoverTrigger>
                <Button mx="1vw" bg="blackAlpha.400" fontSize={['sm', 'md']}>
                    Filter
                </Button>
            </PopoverTrigger>
            <PopoverContent p={4} bg="blackAlpha.900">
                <FormControl as="fieldset">
                    <FormLabel as="legend">Item to search</FormLabel>
                    <RadioGroup
                        value={radioValue}
                        colorScheme="purple"
                        onChange={setRadioValue}
                    >
                        <HStack spacing="24px">
                            <Radio value="movie" ref={initRef}>
                                Movies
                            </Radio>
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
