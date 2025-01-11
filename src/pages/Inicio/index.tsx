import styles from "./index.module.css";
import { useAluraFlixContext, categoriaType } from "../../context/AluraFlix";
import ContenedorCategoria from "../../components/ContenedorCategoria";

const Inicio = () => {
    const { 
        setSelectedVideo,
        categorias,
        videos,
        videosListIsChanging,
        updatingVideoId,
        deletingVideoId
    } = useAluraFlixContext();

    if (videosListIsChanging && !(updatingVideoId || deletingVideoId)) {
        return (
            <div className={styles.loading}>
                <img src="/img/loading-loading-forever.gif" alt="cargando"/>
                <h2>Cargando videos...</h2>
            </div>
        );
    }

    return (
        <div className={styles.inicio}>
            {
                categorias.map((categoria: categoriaType) => {
                    return (
                        <ContenedorCategoria 
                            categoria={categoria} 
                            videos={videos.filter(video => video.categoria === categoria.id)}
                            videoClick={setSelectedVideo}
                            key={categoria.id}
                        />
                    );
                })
            }
        </div>
    )
}

export default Inicio;