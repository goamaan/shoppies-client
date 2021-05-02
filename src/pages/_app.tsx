import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import 'simplebar/dist/simplebar.min.css';

const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 10 } }, // cache valid for 10 minutes
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
