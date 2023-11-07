import styles from "./ItemCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function ItemCard({
    id,
    name,
    price,
    tipo,
    handleRemove
}: {
    id: number | null,
    name: string | null,
    price: number | null,
    tipo: string,
    handleRemove?: any | null
}) {
    const remove = (e: any ) => {
        e.preventDefault(); // evita que o link seja seguido
        handleRemove(id); // chama a função que foi passada via props
    };
    return (
        <div className={styles.item_card}>
            <h4>{name}</h4>
            <p>
                <span>R$ {price}</span>
            </p>
            <p className={styles.tipo_text}>
                <span className={`${styles[tipo.toLowerCase()]}`}>
                </span>
                {tipo}
            </p>
            <p className={styles.tipo_text}>
                <div className={`${styles.item_card_action}`}>
                    <Link to={`/restaurante/${id}`}><BsPencil />Editar</Link>
                </div>
                <button onClick={remove}>
                    <BsFillTrashFill />Remover
                </button>
            </p>
        </div>
    )
}

export default ItemCard;