import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Index = () => (
    <Container height="100vh">
        <Main>
            <DarkModeSwitch />
        </Main>
    </Container>
);

export default Index;
