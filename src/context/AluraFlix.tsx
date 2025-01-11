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
    addVideo: (video: videoType) => void;
    updateVideo: (video: videoType) => void;
    deleteVideo: (video: videoType) => void;
  }

const AluraFlixContext = createContext<AluraFlixContextType>({ 
    selectedVideo: initialVideo,
    setSelectedVideo: () => {},
    anchoPantalla: window.innerWidth,
    categorias: [],
    videos: [],
    setVideos: () => {},
    loadVideos: () => {},
    addVideo: () => {},
    updateVideo: () => {},
    deleteVideo: () => {}
});

AluraFlixContext.displayName = "AluraFlix";

const AluraFlixProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedVideo, setSelectedVideo] = useState<videoType>(initialVideo);
    const [anchoPantalla, setAnchoPantalla] = useState<number>(window.innerWidth);
    const [categorias, setCategorias] = useState<categoriaType[]>([]);
    const [videos, setVideos] = useState<videoType[]>([]);
    const urlBase = "https://6781529b85151f714b0a4aac.mockapi.io";

    const loadCategorias = () => {
        fetch(`${urlBase}/categorias`)
            .then((response) => response.json())
            .then((data) => setCategorias(data));
    }
    
    const loadVideos = () => {
        fetch(`${urlBase}/videos`)
            .then((response) => response.json())
            .then((data: videoType[]) => {
                setVideos(data);
                if (selectedVideo.id != initialVideo.id)
                {
                    const sv = videos.find((data) => data.id === selectedVideo.id);
                    if (sv)
                        setSelectedVideo(sv)
                    else
                    setSelectedVideo(initialVideo);
                }
            });
    }

    const addVideo = (video: videoType) => {
        fetch(`${urlBase}/videos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(video)
        })
        .then((response) => {
            if (response.ok)
                loadVideos();
        });
    };

    const updateVideo = (video: videoType) => {
        fetch(`${urlBase}/videos/${video.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(video)
        })
        .then((response) => {
            if (response.ok)
                loadVideos();
        });
    };

    const deleteVideo = (video: videoType) => {
        fetch(`${urlBase}/videos/${video.id}`, {
            method: "DELETE"
        })
        .then((response) => {
            if (response.ok)
                loadVideos();
        });
    }
    
    useEffect(() => {
        const handleResize = () => {
          setAnchoPantalla(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
        
        loadCategorias();
        loadVideos();

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
                loadVideos,
                addVideo,
                updateVideo,
                deleteVideo
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
        loadVideos,
        addVideo,
        updateVideo,
        deleteVideo
    } = useContext(AluraFlixContext);

    const recargarVideos = () => {
        loadVideos();
    }
    
    return { 
        selectedVideo,
        setSelectedVideo,
        anchoPantalla,
        categorias,
        videos,
        recargarVideos,
        addVideo,
        updateVideo,
        deleteVideo
    };
}

export default AluraFlixProvider;
export type { categoriaType, videoType };
export { AluraFlixContext, useAluraFlixContext };