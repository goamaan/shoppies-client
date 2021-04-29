import { Box } from '@chakra-ui/layout';

const Navbar: React.FC = () => {
    return (
        <Box
            w="100%"
            textAlign="justify"
            bgGradient="linear(to-r, shopify.200, bg.700)"
            bgClip="text"
            fontWeight="hairline"
            fontSize="6xl"
            display="flex"
            flexFlow="row nowrap"
            justifyContent="space-evenly"
        >
            <Box>t</Box>
            <Box>h</Box>
            <Box>e</Box>
            <Box>S</Box>
            <Box>h</Box>
            <Box>o</Box>
            <Box>p</Box>
            <Box>p</Box>
            <Box>i</Box>
            <Box>e</Box>
            <Box>s</Box>
        </Box>
    );
};

export { Navbar };
