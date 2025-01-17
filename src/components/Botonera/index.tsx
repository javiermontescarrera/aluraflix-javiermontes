import { useLocation } from 'react-router-dom';
import styles from "./Botonera.module.css";
import BotoneraLink from "../BotoneraLink";

const Botonera = () => {
    const location = useLocation();
    const urlHome = "/";
    const urlNuevoVideo = "/nuevo-video"
    
    return (
        <section className={styles.botonera}>
            <BotoneraLink
                url={urlHome}
                icono="/img/Home.svg"
                alt="icono-home"
                selectedButton = {location.pathname === urlHome}
            >
                HOME
            </BotoneraLink>
            <BotoneraLink
                url={urlNuevoVideo}
                icono="/img/Nuevo.svg"
                alt="icono-home"
                selectedButton = {location.pathname === urlNuevoVideo}
            >
                NUEVO VIDEO
            </BotoneraLink>
        </section>
    )
}

export default Botonera;