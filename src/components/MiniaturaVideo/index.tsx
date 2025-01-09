import hexToRgba from "hex-to-rgba";
import styles from "./MiniaturaVideo.module.css";
import { videoType } from "../../context/AluraFlix";
import iconoBorrar from "./IconoBorrar.png";
import iconoEditar from "./IconoEditar.png";

const MiniaturaVideo = ({video, hideButtons, colorCategoria, videoClick}:{video: videoType, hideButtons?: boolean, colorCategoria?: string, videoClick: (video: videoType) => void}) => {
    const color = colorCategoria ? colorCategoria : "#6BD1FF";
    const shadowColor = hexToRgba(color, 1);

    const handleClick = () => {
        videoClick(video);
    }

    return (
        <div 
            className={styles.miniatura}
            style={{ 
                width: `${(!hideButtons) ? "32%" : "49%"}`,
                maxWidth: `${(!hideButtons) ? "750px" : "1900px"}`,
            }}
        >
            <div 
                className= {`${styles.miniatura__container} ${hideButtons ? styles.miniatura__container__botonera__oculta : ''}`} 
                onClick={handleClick}
            >
                <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={`Miniatura video ${video.titulo}`} 
                />
                <div className={styles.overlay}
                    style={{
                        border: `5px solid ${color}`,
                        boxShadow: `inset 0px 0px 21px 5px ${shadowColor}`,
                    }}
                />
            </div>
            {
                !hideButtons && 
                <section 
                    className={styles.botonera}
                    style={{
                        border: `5px solid ${color}`,
                    }}
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