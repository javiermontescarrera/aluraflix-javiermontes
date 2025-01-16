import { Link } from "react-router-dom";
import styles from "./BotoneraLink.module.css";
import { PropsWithChildren } from "react";

const BotoneraLink = (props: PropsWithChildren<{url: string, icono?: string, alt?: string, selectedButton?: boolean, innerShadow?: boolean}>) => {
    const { url, icono, alt, selectedButton, children } = props
    return (
        <Link 
            to={url} 
            className={styles.link} 
            style={
                    { 
                        borderColor: `${(!selectedButton)?"var(--blanco)":"var(--azul)"}` , 
                        boxShadow: `${(!selectedButton)?"none":"inset 0px 0px 29px 0px rgba(34, 113, 209, 0.7)"}`, 
                        color: `${(!selectedButton)?"var(--blanco)":"var(--azul)"}`
                    }
                }
        >
            {
                icono && 
                <img 
                    src={icono}
                    alt={alt}
                    className={styles.icono}
                    style={
                            { 
                                color: `${(!selectedButton)?"var(--blanco)":"var(--azul)"}`
                            }
                        }
                />
            }
            {children}
        </Link>
    )
}

export default BotoneraLink;