import Tag from "../Tag";
import styles from "./Banner.module.css";
import { useAluraFlixContext } from "../../context/AluraFlix";
import MiniaturaVideo from "../MiniaturaVideo";
import { videoType } from "../../context/AluraFlix";

const Banner = () => {
  const { selectedVideo, categorias } = useAluraFlixContext();
  const categoria = categorias.find((item) => item.id === selectedVideo.categoria) || null;

  const playVideo = (video: videoType) => {
    console.log(`playVideo ${JSON.stringify(video)}`);
  };

  return (
    <div className={styles.capa} >
      {/* <div className={styles.gradient}>
      </div> */}
      <div className={styles.detalleVideo}>
        <div className={styles.descripcionVideo}>
          <div className={styles.categoriaVideo}>
            {
              categoria &&
              <Tag titulo={categoria.nombre} color={categoria.color} alto={92} fontsize={48} ancho={297} />
            }
          </div>
          <h1>{selectedVideo.titulo}</h1>
          <p>{selectedVideo.descripcion}</p>
        </div>
        {
          categoria &&
          <MiniaturaVideo video={selectedVideo} hideButtons videoClick={playVideo} colorCategoria={categoria.color}/>
        }
      </div>
    </div>
  );
};

export default Banner;
