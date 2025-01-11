import { useState } from "react";
import { Button, TextField, Select, MenuItem, Box, FormControl, SelectChangeEvent } from '@mui/material';
// import { Button, TextField, Select, MenuItem, MenuProps, OutlinedInput, SelectChangeEvent, FormControlLabel } from '@mui/material';
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
        
        // if (video) {
        //     updateVideo(videoEditado);
        // } else
        //     addVideo(videoEditado);
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
            <TextField 
                id="titulo" 
                label="Título" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                required
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={() => validarTitulo()}
                style={{ background: "black", fontSize: 25, color: "white" }}
            />
            <Box sx={{ minWidth: 350 }}>
                <FormControl fullWidth>
                    <Select
                        value={categoria}
                        required
                        style={{ background: "black", fontSize: 25, color: "white" }}
                        onChange={(event: SelectChangeEvent) => {
                            setCategoria(event.target.value as string);
                        }}
                    >
                        {
                            categorias.map((categoria) => (
                                <MenuItem
                                    key={categoria.id}
                                    value={categoria.id}
                                    style={{ fontSize: 25 }}
                                >
                                    {categoria.nombre}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>
            <TextField 
                id="imagen" 
                label="Imagen" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                required
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={() => validarUrl(imagen)}
                style={{ background: "black", fontSize: 25, color: "white" }}
            />
            <TextField 
                id="video" 
                label="Video" 
                variant="outlined" 
                fullWidth 
                margin="normal"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={() => validarUrl(link)}
                style={{ background: "black", fontSize: 25, color: "white" }}
            />
            <TextField 
                id="descripcion" 
                label="Descripción" 
                variant="outlined" 
                fullWidth
                multiline
                margin="normal"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ""}
                onBlur={() => validarDescripcion()}
                style={{ background: "black", fontSize: 25, color: "white" }}
            />
            <Button variant="contained" type="submit">GUARDAR</Button>
        </form>
    );
};

export default FormularioVideo;