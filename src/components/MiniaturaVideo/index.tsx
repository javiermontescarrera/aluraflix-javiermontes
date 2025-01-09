import { useRef, useState, useEffect } from "react";
import hexToRgba from "hex-to-rgba";
import { MdRemoveRedEye, MdOutlinePlayCircleFilled } from "react-icons/md";
import styles from "./MiniaturaVideo.module.css";
import { videoType } from "../../context/AluraFlix";
import iconoBorrar from "./IconoBorrar.png";
import iconoEditar from "./IconoEditar.png";
import { useAluraFlixContext } from "../../context/AluraFlix";

const MiniaturaVideo = (
    {
        video,
        hideButtons,
        colorCategoria,
        videoClick
    }:{
        video: videoType,
        hideButtons?: boolean,
        colorCategoria?: string,
        videoClick: (video: videoType) => void
    }) => {
        
    const color = colorCategoria ? colorCategoria : "#6BD1FF";
    const shadowColor = hexToRgba(color, 1);
    const shadowColorHover = hexToRgba(color, 2.5);
    const colorIconos = hexToRgba(color, 0.85);
    const divRef = useRef(null);
    const { anchoPantalla } = useAluraFlixContext();
    const [width, setWidth] = useState(100); // Estado para almacenar el ancho

    const handleClick = () => {
        videoClick(video);
    }

    useEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.getBoundingClientRect().width*.15);
        }
    }, [anchoPantalla]);

    const styleMiniatura = {
        width: `${(!hideButtons) ? "32%" : "49%"}`,
        maxWidth: `${(!hideButtons) ? "750px" : "1900px"}`,
        '--shadow-color': shadowColor,
        '--shadow-color-hover': shadowColorHover
    };

    return (
        <div 
            ref={divRef}
            className={styles.miniatura}
            style={styleMiniatura}
        >
            <div 
                className= {`${styles.miniatura__container} ${hideButtons ? styles.miniatura__container__botonera__oculta : ''}`} 
                onClick={handleClick}
            >
                <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={`Miniatura video ${video.titulo}`} 
                />
                <div className={styles.overlay}>
                    {
                        hideButtons ?
                        <MdOutlinePlayCircleFilled className={styles.iconoAccion} size={width} color={colorIconos} />
                        :
                        <MdRemoveRedEye className={styles.iconoAccion} size={width} color={colorIconos} />
                    }
                </div>
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