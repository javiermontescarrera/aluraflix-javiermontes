import { useLayoutEffect } from "react";

import styles from "./NuevoVideo.module.css";
import FormularioVideo from "../../components/FormularioVideo";
import { useAluraFlixContext } from "../../context/AluraFlix";

const NuevoVideo = () => {
    const { setVideoEditar } = useAluraFlixContext();

    useLayoutEffect(() => {
        setVideoEditar(null);
    }, []);

    return (
        <section className={styles.nuevo_video}>
            <h2 className={styles.titulo}>Nuevo Video</h2>
            <FormularioVideo />
        </section>
    );
};

export default NuevoVideo;