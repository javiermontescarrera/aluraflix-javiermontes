import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css"
import Botonera from "../Botonera";

const Cabecera = () => {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src="/img/LogoMain.png" alt="Logo AluraFlix"/>
                </section>
            </Link>
            <nav>
                <Botonera />
            </nav>
        </header>
    )
}

export default Cabecera;