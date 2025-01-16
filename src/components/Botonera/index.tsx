import styles from "./Botonera.module.css";
import BotoneraLink from "../BotoneraLink";

const Botonera = () => {
    return (
        <section className={styles.botonera}>
            <BotoneraLink url="/" icono="/img/Home.svg" alt="icono-home" selectedButton>
                HOME
            </BotoneraLink>
            <BotoneraLink url="/nuevo-video">NUEVO VIDEO</BotoneraLink>
        </section>
    )
}

export default Botonera;