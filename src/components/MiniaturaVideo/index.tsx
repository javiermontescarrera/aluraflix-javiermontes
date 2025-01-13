import { useRef, useState, useEffect } from "react";
import hexToRgba from "hex-to-rgba";
// import { MdRemoveRedEye, MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import styles from "./MiniaturaVideo.module.css";
import { videoType } from "../../context/AluraFlix";
import iconoBorrar from "./IconoBorrar.png";
import iconoEditar from "./IconoEditar.png";
import { useAluraFlixContext } from "../../context/AluraFlix";
import ModalAluraFlix from "../ModalAluraFlix";
import FormularioVideo from "../FormularioVideo";
import ReactPlayer from 'react-player/youtube'

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
    const colorIconos = hexToRgba(color, 0.85);
    const divRef = useRef<HTMLDivElement | null>(null);
    const [iconSize, setIconSize] = useState(100);
    const [playerHeight, setPlayerHeight] = useState(0);
    const { deleteVideo, setAbrirModal, updatingVideoId, deletingVideoId, setVideoEditar } = useAluraFlixContext();
    
    const handleClick = () => {
        videoClick(video);
    }

    const handleDelete = () => {
        if (window.confirm(`¿Seguro que quieres borrar el video ${video.titulo}?`))
        {
            deleteVideo(video);
        }
    }

    const handleUpdate = () => {
        setVideoEditar(video);
        setAbrirModal(true);
    }

    // Usamos un efecto para configurar el ResizeObserver
    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === divRef.current) {
                    const anchoComponente = entry.contentRect.width;
                    setIconSize(anchoComponente * 0.15);
                    setPlayerHeight(anchoComponente * 0.5625);
                }
            }
        });

        if (divRef.current) {
            resizeObserver.observe(divRef.current);
        }

        return () => {
            if (divRef.current) {
                resizeObserver.unobserve(divRef.current);
            }
        };
    }, []);

    const styleMiniatura = {
        width: `${(!hideButtons) ? "32%" : "49%"}`,
        maxWidth: `${(!hideButtons) ? "750px" : "1900px"}`,
        '--shadow-color': shadowColor
    };

    if (updatingVideoId === video.id || deletingVideoId === video.id) {
        const nombreAccion = updatingVideoId === video.id ? "Actualizando" : "Borrando";
        return (
            <div className={styles.accion}>
                <img src="/img/loading-loading-forever.gif" alt={nombreAccion}/>
                <h2>{nombreAccion} video...</h2>
             </div>
        );
    }

    return (
        <div 
            ref={divRef}
            className={styles.miniatura}
            style={styleMiniatura}
        >
            <div 
                className={`${styles.miniatura__container} ${hideButtons ? styles.miniatura__container__botonera__oculta : ''}`} 
                onClick={handleClick}
            >
                {
                    hideButtons ?
                    <ReactPlayer url={video.link} controls width={"100%"} height={playerHeight}/>
                    :
                    <>
                        <img 
                            src={video.imagen} 
                            alt={`Miniatura video ${video.titulo}`} 
                        />
                        <div className={styles.overlay}>
                            {/* {
                                hideButtons ?
                                <MdOutlinePlayCircleFilled className={styles.iconoAccion} size={iconSize} color={colorIconos} />
                                : */}
                                <MdRemoveRedEye className={styles.iconoAccion} size={iconSize} color={colorIconos} />
                            {/* } */}
                        </div>
                    </>
                }
            </div>
            {
                !hideButtons && 
                <section 
                    className={styles.botonera}
                    style={{
                        border: `5px solid ${color}`,
                    }}
                >
                    <div className={styles.boton} onClick={handleDelete}>
                        <img src={iconoBorrar} alt="Borrar" />
                        <span>
                            Borrar
                        </span>
                    </div>
                    <div className={styles.boton} onClick={handleUpdate}>
                        <img src={iconoEditar} alt="Editar" />
                        <span>
                            Editar
                        </span>
                    </div>
                </section>
            }
            <ModalAluraFlix>
                <div className={styles.modal}>
                    <h2 className={styles.modal__titulo}>Editar Card</h2>
                    <FormularioVideo/>
                </div>
            </ModalAluraFlix>
        </div>
    )
}

export default MiniaturaVideo;
