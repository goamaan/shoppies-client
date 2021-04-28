import { useColorMode, IconButton, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const DarkModeSwitch = () => {
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const text = useColorModeValue('dark', 'light');
    const { toggleColorMode: toggleMode } = useColorMode();
    return (
        <IconButton
            position="fixed"
            top="1rem"
            right="1rem"
            aria-label={`Switch to ${text} mode`}
            title={`Switch to ${text} mode`}
            variant="solid"
            onClick={toggleMode}
            icon={<SwitchIcon />}
        />
    );
};
