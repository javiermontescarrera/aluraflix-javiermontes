import { Outlet, useLocation } from "react-router-dom";
import styles from "./PaginaBase.module.css";
import Cabecera from "../../components/Cabecera/Cabecera";
import Container from "../../components/Container";
import AluraFlixProvider from "../../context/AluraFlix";
import Pie from "../../components/Pie/Pie";
import Banner from "../../components/Banner";

const PaginaBase = () => {
    const location = useLocation();
    // const urlHome = "/";
    const urlNuevoVideo = "/nuevo-video"
    return (
        <main>
            <Cabecera />
            <AluraFlixProvider>
                <div className={`${location.pathname === urlNuevoVideo ? styles.bannerNuevoVideo : styles.banner}`}>
                    <Banner />
                </div>
                <Container>
                    <Outlet />
                </Container>
            </AluraFlixProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase;