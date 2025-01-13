import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

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
import { useAluraFlixContext } from "../../context/AluraFlix";

const FormularioVideo = () => {
    const navigate = useNavigate();
    
    const { categorias, addVideo, updateVideo, recargarVideos, setAbrirModal, videoEditar, setVideoEditar } = useAluraFlixContext();
    const [titulo, setTitulo] = useState(videoEditar?.titulo || '');
    const [categoria, setCategoria] = useState(videoEditar?.categoria || '');
    const [imagen, setImagen] = useState(videoEditar?.imagen || '');
    const [link, setLink] = useState(videoEditar?.link || '');
    const [descripcion, setDescripcion] = useState(videoEditar?.descripcion || ''); 
    
    // console.log(`videoEditar: ${JSON.stringify(videoEditar)}`);
    useEffect(() => {
        setTitulo(videoEditar?.titulo || '');
        setCategoria(videoEditar?.categoria || '');
        setImagen(videoEditar?.imagen || '');
        setLink(videoEditar?.link || '');
        setDescripcion(videoEditar?.descripcion || '');
    }, [videoEditar]);
    
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
        const videoEditado = videoEditar ? 
            {...videoEditar, titulo, categoria, imagen, link, descripcion}
            : 
            {id: "", titulo, categoria, imagen, link, descripcion};
        
        if (videoEditar) {
            updateVideo(videoEditado);
        } else{
            addVideo(videoEditado);
        }

        handleLimpiar();
        setVideoEditar(null);
        recargarVideos();
        setAbrirModal(false);
        alert('La operacion se ejecuto exitosamente!');
        navigate('/');
    }

    const handleLimpiar = () => {
        setTitulo("");
        setCategoria("");
        setImagen("");
        setLink("");
        setDescripcion("");
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
        <div className={styles.contenedorFormulario}>            
            <form
                className={styles.formulario} 
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    handleSubmit();
                }}
                onReset={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    handleLimpiar();
                }}
            >
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
                                        font: 'inherit'
                                    }}
                                    // sx={{
                                    //     fontSize: 20,
                                    // }}
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
                    <span>Descripción</span>
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
                        slotProps={{
                            input: {
                                    style: {
                                        padding: "0px",
                                        width: "fit-content",
                                    },
                            },
                        }}
                    />
                </div>

                <div className={styles.divider}>
                    <Button variant="contained" type="submit">GUARDAR</Button>
                    <Button variant="contained" type="reset">LIMPIAR</Button>
                </div>
            </form>
        </div>
    );
};

export default FormularioVideo;