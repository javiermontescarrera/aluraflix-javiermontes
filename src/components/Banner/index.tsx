import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: 'url("/img/Banner.png")' }}
    >
        <div className={styles.gradient}>
        </div>
    </div>
  );
};

export default Banner;
