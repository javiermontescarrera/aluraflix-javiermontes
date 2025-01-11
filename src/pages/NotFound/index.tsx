import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <section className={styles.not_found_container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.text_error}>Página no encontrada</p>
        </section>
    );
};

export default NotFound;