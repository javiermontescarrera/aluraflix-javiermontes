import Tag from "../Tag";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: 'url("/img/Banner.png")' }}
    >
        <div className={styles.gradient}>
        </div>
        <div style={{position: "absolute", top: "50%", transform: "translate(40.11px, -550px)"}}>
          <Tag titulo="Front End" color="#6BD1FF" alto={92} fontsize={48} ancho={297} />
        </div>
    </div>
  );
};

export default Banner;
