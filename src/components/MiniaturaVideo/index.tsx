import styles from "./MiniaturaVideo.module.css";
import { videoType } from "../../context/AluraFlix";
import iconoBorrar from "./IconoBorrar.png";
import iconoEditar from "./IconoEditar.png";

const MiniaturaVideo = ({video, hideButtons}:{video: videoType, hideButtons?: boolean}) => {
    return (
        <div 
            className={styles.miniatura}
            style={{ width: `${(!hideButtons) ? "430px" : "647.79px"}`}}
        >
            <div className= {`${styles.gradient} ${hideButtons ? styles.gradient__botonera__oculta : ''}`} >
                <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={`Miniatura video ${video.titulo}`} 
                />
            </div>
            {
                !hideButtons && 
                <section 
                    className={styles.botonera} 
                >
                    <div className={styles.boton}>
                        <img src={iconoBorrar} alt="Borrar" />
                        <span>
                            Borrar
                        </span>
                    </div>
                    <div className={styles.boton}>
                        <img src={iconoEditar} alt="Editar" />
                        <span>
                            Editar
                        </span>
                    </div>
                </section>
            }
        </div>
    )
}

export default MiniaturaVideo;