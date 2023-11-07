import { useNavigate } from "react-router-dom";
import ItemForm from "../Itens/ItemForm";
import styles from "./NovaPagina.module.css";

interface TipoType {
    id: number;
    name: string;
}

interface ValorType {
    id?: string;
    name?: string;
    custo?: number;
    descricao?: string;
}

interface restauranteData {
    id: number;
    name: string;
    price: number;
    tipos: TipoType;
    total: number;
    valores: ValorType[];
}

function NovaPagina() {
    const history = useNavigate();
    function createPost(restaurante: restauranteData) {
        restaurante.total = 0;
        restaurante.valores = [];
        fetch("http://localhost:8080/restaurante", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(restaurante), // transforma o objeto em JSON
        })
            .then((response) => response.json())
            .then((dados) => {
                console.log(dados);
                history("/restaurante", {
                    state: {
                        mensagem: "Restaurante cadastrado com sucesso!"
                    }
                });
            })
            .catch((erro) => console.error(erro));
    }

    return (
        <div className={styles.novapagina_container}>
            <h1>Novo Restaurante</h1>
            <p>Adicione um item do restaurante: </p>
            <ItemForm handleSubmit={createPost} btnText="Enviar" />
        </div>
    );
}

export default NovaPagina;