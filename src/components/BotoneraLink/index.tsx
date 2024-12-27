import { Link } from "react-router-dom";
import styles from "./BotoneraLink.module.css";
import { PropsWithChildren } from "react";

const BotoneraLink = (props: PropsWithChildren<{url: string}>) => {
    const { url, children } = props
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default BotoneraLink;