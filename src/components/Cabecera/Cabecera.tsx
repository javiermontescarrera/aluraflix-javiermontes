import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css"
import Botonera from "../Botonera";

const Cabecera = () => {
    return (
        <header className={styles.cabecera}>
            <div className={styles.cabecera__placeholder}>
                <Link to="/">
                    <section className={styles.logoContainer}>
                        <img src="/img/LogoMain.png" alt="Logo AluraFlix"/>
                    </section>
                </Link>
                <nav className={styles.navegacion}>
                    <Botonera />
                </nav>
            </div>
        </header>
    )
}

export default Cabecera;