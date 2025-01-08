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
            <div className={styles.container}>
                {/* {
                    videos.map((video: videoType) => {
                            return <Card {...video} />
                        }
                    )
                } */}
                <MiniaturaVideo 
                    video={
                            {
                                id: "PztCEdIJITY", 
                                titulo: "Cuándo usar let, var y const?", 
                                categoria: "FRONT END", 
                                link: "https://www.youtube.com/watch?v=PztCEdIJITY", 
                                descripcion: "¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript."
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
                                id: "rpvrLaBQwgg", 
                                titulo: "Equipo Front End #AluraMás", 
                                categoria: "FRONT END", 
                                link: "https://www.youtube.com/watch?v=rpvrLaBQwgg", 
                                descripcion: "¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?"
                            }
                        }
                />
            </div>
        </div>
    )
}

export default Inicio;