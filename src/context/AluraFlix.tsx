import { 
    createContext,
    FC,
    useState,
    useContext,
    useEffect
} from "react";

type videoType = {
    id: string;
    titulo: string;
    categoria: string;
    link: string;
    descripcion: string;
  }

const initialVideo: videoType = {
    id: "ov7vA5HFe6w",
    titulo: "Qué Significa Pensar Como Programador",
    categoria: "Front End",
    link: "https://www.youtube.com/watch?v=ov7vA5HFe6w",
    // descripcion: "¿Cuáles son las principales características de un programador? ¿Qué habilidades y competencias debe tener alguien que quiere seguir esa carrera?\n\nEn este video Christian Velasco nos habla de las principales características de un Programador."
    descripcion: "¿Cuáles son las principales características de un programador? ¿Qué habilidades y competencias debe tener alguien que quiere seguir esa carrera? En este video Christian Velasco nos habla de las principales características de un Programador."
}

type AluraFlixContextType = {
    favorito: videoType[];
    setFavorito: (favorito: videoType[]) => void;
    selectedVideo: videoType;
    setSelectedVideo: (video: videoType) => void;
    anchoPantalla: number;
    setAnchoPantalla: (ancho: number) => void;
  }

const AluraFlixContext = createContext<AluraFlixContextType>({ 
    favorito: [],
    setFavorito: () => {}, 
    selectedVideo: initialVideo,
    setSelectedVideo: () => {},
    anchoPantalla: window.innerWidth,
    setAnchoPantalla: () => {}
});

AluraFlixContext.displayName = "AluraFlix";


const AluraFlixProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorito, setFavorito] = useState<videoType[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<videoType>(initialVideo);
    const [anchoPantalla, setAnchoPantalla] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setAnchoPantalla(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    return (
        <AluraFlixContext.Provider 
            value={{ 
                favorito, 
                setFavorito, 
                selectedVideo, 
                setSelectedVideo,
                anchoPantalla,
                setAnchoPantalla
            }}>
            {children}
        </AluraFlixContext.Provider>
    )
};

const useAluraFlixContext = () => {
    const { 
        favorito,
        setFavorito,
        selectedVideo,
        setSelectedVideo,
        anchoPantalla,
        setAnchoPantalla
    } = useContext(AluraFlixContext);

    function agregarFavorito(nuevoFavorito: videoType) {
        const favoritoRepetido = favorito.some(item=> item.id === nuevoFavorito.id);
        let nuevaLista= [...favorito];
        if (!favoritoRepetido) {
            nuevaLista.push(nuevoFavorito);
        } else {
            nuevaLista = favorito.filter(item => item.id !== nuevoFavorito.id);
        }

        return setFavorito(nuevaLista);
    }
    
    return { 
        favorito,
        agregarFavorito,
        selectedVideo,
        setSelectedVideo,
        anchoPantalla,
        setAnchoPantalla 
    };
}

export default AluraFlixProvider;
export type { videoType };
export { AluraFlixContext, useAluraFlixContext };