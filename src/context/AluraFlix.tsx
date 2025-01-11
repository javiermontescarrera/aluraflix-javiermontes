import { 
    createContext,
    FC,
    useState,
    useContext,
    useEffect
} from "react";

type categoriaType = {
    id: string;
    nombre: string;
    color: string;
}

type videoType = {
    id: string;
    categoria: string;
    titulo: string;
    link: string;
    descripcion: string;
    imagen: string;
  }

const initialVideo: videoType = {
    id: "0",
    titulo: "Challenge React",
    categoria: "1",
    link: "https://www.youtube.com/watch?v=ov7vA5HFe6w",
    descripcion: "Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.",
    // imagen: "https://i.ytimg.com/vi/ov7vA5HFe6w/maxresdefault.jpg"
    imagen: "https://img.youtube.com/vi/ov7vA5HFe6w/maxresdefault.jpg"
}

type AluraFlixContextType = {
    selectedVideo: videoType;
    setSelectedVideo: (video: videoType) => void;
    anchoPantalla: number;
    categorias: categoriaType[];
    videos: videoType[];
    setVideos: (videos: videoType[]) => void;
    loadVideos: () => void;
  }

const AluraFlixContext = createContext<AluraFlixContextType>({ 
    selectedVideo: initialVideo,
    setSelectedVideo: () => {},
    anchoPantalla: window.innerWidth,
    categorias: [],
    videos: [],
    setVideos: () => {},
    loadVideos: () => {}
});

AluraFlixContext.displayName = "AluraFlix";

const AluraFlixProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    // const [favorito, setFavorito] = useState<videoType[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<videoType>(initialVideo);
    const [anchoPantalla, setAnchoPantalla] = useState<number>(window.innerWidth);
    const [categorias, setCategorias] = useState<categoriaType[]>([]);
    const [videos, setVideos] = useState<videoType[]>([]);

    const loadCategorias = () => {
        fetch("https://6781529b85151f714b0a4aac.mockapi.io/categorias")
            .then((response) => response.json())
            .then((data) => setCategorias(data));
    }
    
    const loadVideos = () => {
        fetch("https://6781529b85151f714b0a4aac.mockapi.io/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }
    
    useEffect(() => {
        const handleResize = () => {
          setAnchoPantalla(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
        
        loadCategorias();
        loadVideos();

        fetch("https://6781529b85151f714b0a4aac.mockapi.io/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data));
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    return (
        <AluraFlixContext.Provider 
            value={{ 
                selectedVideo, 
                setSelectedVideo,
                anchoPantalla,
                categorias,
                videos,
                setVideos,
                loadVideos
            }}>
            {children}
        </AluraFlixContext.Provider>
    )
};

const useAluraFlixContext = () => {
    const { 
        selectedVideo,
        setSelectedVideo,
        anchoPantalla,
        categorias,
        videos,
        loadVideos
    } = useContext(AluraFlixContext);

    // function agregarFavorito(nuevoFavorito: videoType) {
    //     const favoritoRepetido = favorito.some(item=> item.id === nuevoFavorito.id);
    //     let nuevaLista= [...favorito];
    //     if (!favoritoRepetido) {
    //         nuevaLista.push(nuevoFavorito);
    //     } else {
    //         nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id);
    //     }

    //     return setFavorito(nuevaLista);
    // }

    const recargarVideos = () => {
        loadVideos();
    }
    
    return { 
        selectedVideo,
        setSelectedVideo,
        anchoPantalla,
        categorias,
        videos,
        recargarVideos
    };
}

export default AluraFlixProvider;
export type { categoriaType, videoType };
export { AluraFlixContext, useAluraFlixContext };