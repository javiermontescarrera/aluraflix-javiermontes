import { Link } from "react-router-dom";
import styles from "./BotoneraLink.module.css";
import { PropsWithChildren } from "react";

const BotoneraLink = (props: PropsWithChildren<{url: string, icono?: string, alt?: string, selectedButton?: boolean, innerShadow?: boolean}>) => {
    const { url, icono, alt, selectedButton, children } = props
    return (
        <Link 
            to={url} 
            className={`${styles.link} ${selectedButton ? styles.linkSelected : styles.linkBlanco}`} 
        >
            {
                icono && 
                <img 
                    src={icono}
                    alt={alt}
                    className={`${styles.icono} ${selectedButton ? styles.iconoSelected : styles.iconoBlanco}`}
                />
            }
            <div className={`${selectedButton ? styles.textoSelected : styles.textoBlanco}`}>
                {children}
            </div>
        </Link>
    )
}

export default BotoneraLink;