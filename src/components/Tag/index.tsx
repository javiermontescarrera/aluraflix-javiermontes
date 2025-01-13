import style from "./Tag.module.css";

const Tag = (
                {titulo, color, alto, fontsize, ancho}:
                {titulo: string; color: string, alto?: number, fontsize?: number, ancho?: number}
            ) => {
    return (
        <div 
            className={style.tag} 
            style={
                    {
                        background: `${color}`,
                        height: `${(alto) ? alto : 70}px`,
                        fontSize: `${(fontsize) ? fontsize : 32}px`,
                        width: `${(ancho) ? ancho : 400}px`
                    }
                }
        >
            <p>{titulo}</p>
        </div>
    );
};

export default Tag;