import Tag from "../Tag";
import styles from "./ContenedorCategoria.module.css"
import { videoType } from "../../context/AluraFlix";
import MiniaturaVideo from "../MiniaturaVideo";

const ContenedorCategoria = ({videos, categoria}:{videos: videoType[], categoria: string}) => {
    return (
        <div>
            <Tag titulo={categoria} color="#6BD1FF" />
            <div className={styles.listaVideos}>
                {
                    videos.map((video: videoType) => {
                            return <MiniaturaVideo video={video} />
                        }
                    )
                }
            </div>
        </div>
    );
}

export default ContenedorCategoria;