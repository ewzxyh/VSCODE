import { BsFillTrashFill } from "react-icons/bs";
import styles from "./ItemCard.module.css";

interface ValorType {
    id?: string;
    name?: string;
    custo?: number;
    descricao?: string;
    handleRemove?: any;
}

function ValorCard({ id, name, custo, descricao, handleRemove }: ValorType) {
    const remove = (val: any) => {
        val.preventDefault();
        handleRemove(id, custo); // Passando o id e o custo para o handleRemove para que ele possa remover o item da lista e atualizar o valor total
    };

    return (
        <div className={styles.item_card}>
            <h4>{name}</h4>
            <p>
                <span>
                    R${custo}
                </span>
            </p>
            <p>{descricao}</p>
            <div className={styles.item_card_action}>
                <button className={styles.item_card_action_button} onClick={remove}>
                    <BsFillTrashFill />
                </button>
            </div>
        </div>
    );
}

export default ValorCard;