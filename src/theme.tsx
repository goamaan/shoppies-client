import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';
import { colors } from './colors';
const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const styles = {
    global: (props: any) => ({
        body: {
            fontFamily: 'body',
            bg: mode('shopify.100', 'bg.800')(props),
            minH: '100%',
        },
        html: {
            minH: '100%',
        },
    }),
};

const theme = extendTheme({
    colors,
    fonts,
    breakpoints,
    styles,
});

export default theme;
