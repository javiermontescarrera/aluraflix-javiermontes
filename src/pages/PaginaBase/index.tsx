import { Outlet } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import Container from "../../components/Container";
import AluraFlixProvider from "../../context/AluraFlix";
import Pie from "../../components/Pie/Pie";
import Banner from "../../components/Banner";

const PaginaBase = () => {
    return (
        <main>
            <Cabecera />
            <AluraFlixProvider>
                <Banner />
                <Container>
                    <Outlet />
                </Container>
            </AluraFlixProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase;