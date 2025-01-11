import styles from "./NuevoVideo.module.css";
import FormularioVideo from "../../components/FormularioVideo";

const NuevoVideo = () => {
    return (
        <section className={styles.nuevo_video}>
            <h2 className={styles.titulo}>Nuevo Video</h2>
            <FormularioVideo />
        </section>
    );
};

export default NuevoVideo;