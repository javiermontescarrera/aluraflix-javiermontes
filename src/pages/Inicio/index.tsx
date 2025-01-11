import styles from "./index.module.css";
import { useAluraFlixContext, categoriaType, videoType } from "../../context/AluraFlix";
import ContenedorCategoria from "../../components/ContenedorCategoria";

const Inicio = () => {
    const { setSelectedVideo, categorias, videos } = useAluraFlixContext();
    
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