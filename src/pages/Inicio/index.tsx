import Banner from "../../components/Banner";
import MiniaturaVideo from "../../components/MiniaturaVideo";
import styles from "./index.module.css";
// import { useState, useEffect } from "react";
// import { videoType } from "../../context/Favoritos";

const Inicio = () => {
    // const [videos, setVideos] = useState<videoType[]>([]);

    // useEffect(() => {
    //     fetch("https://my-json-server.typicode.com/javiermontescarrera/alura-cinema-api/videos")
    //         .then((response) => response.json())
    //         .then((data) => setVideos(data));
    // }, []);

    return (
        <div className={styles.inicio}>
            <section className={styles.container}>
                {/* {
                    videos.map((video: videoType) => {
                            return <Card {...video} />
                        }
                    )
                } */}
                <MiniaturaVideo 
                    video={
                            {
                                id: "GJfOSoaXk4s", 
                                titulo: "¿Qué es JavaScript?", 
                                categoria: "FRONT END", 
                                link: "https://www.youtube.com/watch?v=GJfOSoaXk4s", 
                                descripcion: "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips."
                            }
                        }
                />
                <MiniaturaVideo 
                    video={
                            {
                                id: "GJfOSoaXk4s", 
                                titulo: "¿Qué es JavaScript?", 
                                categoria: "FRONT END", 
                                link: "https://www.youtube.com/watch?v=GJfOSoaXk4s", 
                                descripcion: "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips."
                            }
                        }
                />
                <MiniaturaVideo 
                    video={
                            {
                                id: "GJfOSoaXk4s", 
                                titulo: "¿Qué es JavaScript?", 
                                categoria: "FRONT END", 
                                link: "https://www.youtube.com/watch?v=GJfOSoaXk4s", 
                                descripcion: "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips."
                            }
                        }
                />
            </section>
        </div>
    )
}

export default Inicio;