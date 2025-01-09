import hexToRgba from "hex-to-rgba";
import styles from "./MiniaturaVideo.module.css";
import { videoType } from "../../context/AluraFlix";
import iconoBorrar from "./IconoBorrar.png";
import iconoEditar from "./IconoEditar.png";

const MiniaturaVideo = ({video, hideButtons}:{video: videoType, hideButtons?: boolean}) => {
    const shadowColor = hexToRgba("#6BD1FF", 1);

    return (
        <div 
            className={styles.miniatura}
            // style={{ width: `${(!hideButtons) ? "430px" : "647.79px"}`}}
            style={{ 
                width: `${(!hideButtons) ? "32%" : "49%"}`,
                maxWidth: `${(!hideButtons) ? "750px" : "1900px"}`,
            }}
        >
            <div 
                className= {`${styles.gradient} ${hideButtons ? styles.gradient__botonera__oculta : ''}`} 
                style={{
                    boxShadow: `inset 0px 0px 21px 5px ${shadowColor}`,
                }}
            >
                <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={`Miniatura video ${video.titulo}`} 
                />
                <div 
                    style={{
                        content: '',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'transparent',
                        borderRadius: '15px 15px 0 0',
                        boxShadow: `inset 0px 0px 21px 5px ${shadowColor}`,
                    }}
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