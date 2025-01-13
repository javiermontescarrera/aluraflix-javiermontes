import Tag from "../Tag";
import styles from "./ContenedorCategoria.module.css"
import { categoriaType, videoType } from "../../context/AluraFlix";
import MiniaturaVideo from "../MiniaturaVideo";
import hexToRgba from "hex-to-rgba";
import { backdropClasses } from "@mui/material";


const ContenedorCategoria = (
    {
        categoria,
        videos,
        videoClick
    }:{
        categoria: categoriaType,
        videos: videoType[],
        videoClick: (video: videoType) => void
    }) => {


    const styleCategoria = {
        backgroundColor: `transparent`,
        '--color-categoria': hexToRgba(categoria.color, 1),
    };

    return (
        <div className={styles.categoria} style={styleCategoria}>
            <Tag titulo={categoria.nombre} color={categoria.color} />
            <div className={styles.listaVideos}>
                {
                    videos.map((video: videoType) => {
                            return <MiniaturaVideo 
                                        video={video}
                                        videoClick={videoClick}
                                        colorCategoria={categoria.color}
                                        key={video.id}
                                    />
                        }
                    )
                }
            </div>
        </div>
    );
}

export default ContenedorCategoria;