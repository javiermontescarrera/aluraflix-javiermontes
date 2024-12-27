import { createContext, FC, useState, useContext } from "react";
type videoType = {
    id: number;
    titulo: string;
    capa: string;
    link: string;
  }
  
type FavoritosContextType = {
    favorito: videoType[];
    setFavorito: (favorito: videoType[]) => void;
  }

const FavoritosContext = createContext<FavoritosContextType>({ favorito: [], setFavorito: () => {} });

FavoritosContext.displayName = "Favoritos";


const AluraFlixProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    // const [favorito, setFavorito] = useState([]);
    const [favorito, setFavorito] = useState<videoType[]>([]);

    return (
        <FavoritosContext.Provider value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
};

const useFavoritosContext = () => {
    const { favorito, setFavorito } = useContext(FavoritosContext);

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
    
    return { favorito, agregarFavorito };
}

export default AluraFlixProvider;
export type { videoType };
export { FavoritosContext, useFavoritosContext };