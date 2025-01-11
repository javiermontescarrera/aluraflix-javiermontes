import Tag from "../Tag";
import styles from "./ContenedorCategoria.module.css"
import { categoriaType, videoType } from "../../context/AluraFlix";
import MiniaturaVideo from "../MiniaturaVideo";


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

    return (
        <div className={styles.categoria}>
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