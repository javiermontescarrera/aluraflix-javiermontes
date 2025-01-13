import { useState } from "react";
import { 
    Button,
    TextField,
    Select,
    MenuItem,
    Box,
    FormControl,
    SelectChangeEvent
} from '@mui/material';
import styles from "./FormularioVideo.module.css";
import { useAluraFlixContext, videoType } from "../../context/AluraFlix";

const FormularioVideo = ({ video }: { video?: videoType}) => {
    // const { selectedVideo } = useAluraFlixContext();
    // video = selectedVideo;
    const { categorias, addVideo, updateVideo } = useAluraFlixContext();
    const [titulo, setTitulo] = useState(video?.titulo || '');
    const [categoria, setCategoria] = useState(video?.categoria || '');
    const [imagen, setImagen] = useState(video?.imagen || '');
    const [link, setLink] = useState(video?.link || '');
    const [descripcion, setDescripcion] = useState(video?.descripcion || ''); 

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: ""
        },
        apellidos: {
            error: false,
            message: "Deben ser al menos 3 caracteres"
        }
    });

    const handleSubmit = () => {
        const videoEditado = video ? 
            {...video, titulo, categoria, imagen, link, descripcion}
            : 
            {id: "", titulo, categoria, imagen, link, descripcion};
        console.log(`videoEditado: ${JSON.stringify(videoEditado)}`);
        
        if (video) {
            updateVideo(videoEditado);
        } else
            addVideo(videoEditado);
    }

    const validarTitulo = () => {
        let error = false;
        let message = "";

        if (titulo.length < 3) {
            error = true;
            message = "El título debe tener al menos 3 caracteres";
        };

        setErrors({
            ...errors,
            name: {
                error,
                message
            }
        });
    }

    const validarUrl = (url: string) => {
        let error = false;
        let message = "";

        if (url.length < 3) {
            error = true;
            message = "Debe ser una url válida";
        };

        setErrors({
            ...errors,
            name: {
                error,
                message
            }
        });
    }

    const validarDescripcion = () => {
        let error = false;
        let message = "";

        if (descripcion.length < 3) {
            error = true;
            message = "La descripción debe tener al menos 3 caracteres";
        };

        setErrors({
            ...errors,
            name: {
                error,
                message
            }
        });
    }
    return (
        <form
            className={styles.formulario} 
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                handleSubmit();
            }
        }>
            <div className={styles.divider}>
                <div className={styles.contenedorCampo}>
                    <span>Título</span>
                    <TextField 
                        id="titulo" 
                        // label="Título" 
                        variant="outlined" 
                        fullWidth 
                        margin="none"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                        error={errors.name.error}
                        helperText={errors.name.error ? errors.name.message : ""}
                        onBlur={() => validarTitulo()}
                    />
                </div>
                <div className={styles.contenedorCampo}>
                    <span>Categoría</span>
                    <Box sx={{ minWidth: "100%" }}>
                        <FormControl fullWidth>
                            <Select
                                value={categoria}
                                required
                                style={{ 
                                    // background: "black",
                                    fontSize: 25,
                                    color: "white",
                                    width: "100%",
                                    height: '49px',
                                    textAlign: 'left',
                                    borderRadius: '10px',
                                    border: '1px solid #ccc',
                                }}
                                onChange={(event: SelectChangeEvent) => {
                                    setCategoria(event.target.value as string);
                                }}
                            >
                                {
                                    categorias.map((categoria) => (
                                        <MenuItem
                                            key={categoria.id}
                                            value={categoria.id}
                                            style={{ 
                                                background: "black",
                                                fontSize: 25,
                                                color: "white",
                                                width: "100%",
                                                height: '50px',
                                                textAlign: 'left'
                                            }}
                                        >
                                            {categoria.nombre}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            <div className={styles.divider}>
                <div className={styles.contenedorCampo}>
                    <span>Imagen</span>
                    <TextField 
                        id="imagen" 
                        // label="Imagen" 
                        variant="outlined" 
                        fullWidth 
                        margin="none"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        required
                        error={errors.name.error}
                        helperText={errors.name.error ? errors.name.message : ""}
                        onBlur={() => validarUrl(imagen)}
                    />
                </div>
                <div className={styles.contenedorCampo}>
                    <span>Video</span>
                    <TextField 
                        id="video" 
                        variant="outlined" 
                        fullWidth 
                        margin="none"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                        error={errors.name.error}
                        helperText={errors.name.error ? errors.name.message : ""}
                        onBlur={() => validarUrl(link)}
                    />
                </div>
            </div>
            <div className={styles.monocomponente} >
                <span style={{ marginLeft: "16px" }}>Descripción</span>
                <TextField 
                    id="descripcion" 
                    variant="outlined" 
                    fullWidth
                    multiline
                    margin="none"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                    error={errors.name.error}
                    helperText={errors.name.error ? errors.name.message : ""}
                    onBlur={() => validarDescripcion()}
                    minRows={4}
                />
            </div>
            <Button variant="contained" type="submit">GUARDAR</Button>
        </form>
    );
};

export default FormularioVideo;