import { createRoot } from "react-dom/client";
import { MainView } from './components/main-view';
import { Container } from 'react-bootstrap';
import "./index.scss";

const Reactporfolio = () => {
    return(
        <Container>
            <MainView/>
        </Container>
    );
};

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<Reactporfolio/>);