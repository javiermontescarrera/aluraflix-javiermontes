import Tag from "../Tag";
import styles from "./Banner.module.css";
import { useAluraFlixContext } from "../../context/AluraFlix";
import MiniaturaVideo from "../MiniaturaVideo";
import { videoType } from "../../context/AluraFlix";

const Banner = () => {
  const { selectedVideo } = useAluraFlixContext();

  const playVideo = (video: videoType) => {
    console.log(`playVideo ${JSON.stringify(video)}`);
  };

  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: 'url("/img/Banner.png")' }}
    >
        <div className={styles.gradient}>
        </div>
        <div className={styles.detalleVideo}>
          <div className={styles.descripcionVideo}>
            <Tag titulo={selectedVideo.categoria} color="#6BD1FF" alto={92} fontsize={48} ancho={297} />
            <br />
            <h1>{selectedVideo.titulo}</h1>
            <p>{selectedVideo.descripcion}</p>
          </div>
          <MiniaturaVideo video={selectedVideo} hideButtons videoClick={playVideo}/>
        </div>
    </div>
  );
};

export default Banner;
