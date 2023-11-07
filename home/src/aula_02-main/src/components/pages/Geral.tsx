import { useLocation } from "react-router-dom";
import styles from "./Geral.module.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import { useState, useEffect } from "react";
import ItemCard from "../Itens/ItemCard";
import Mensagem from "../layout/Mensagem";

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

interface RestauranteData {
    id: number;
    name: string;
    price: number;
    tipos: TipoType;
    total: number;
    valores: ValorType[];
}

function Geral() {
    const location = useLocation();
    const [restaurante, setRestaurante] = useState([]);
    const [msg, setMsg] = useState("");

    let mensagem = "";
    if (location.state) {
        mensagem = location.state.mensagem;
    }

    useEffect(() => {
        fetch("http://localhost:8080/restaurante", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((dados) => { setRestaurante(dados); })
            .catch((erro) => setMsg(erro.message));
    }, []);

    function removeRestaurante(id: number) {
        setMsg("");
        fetch(`http://localhost:8080/restaurante/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then(() => {
                setRestaurante(restaurante.filter((res: TipoType) => res.id !== id));
                setMsg("Item removido com sucesso!");
            })
            .catch((erro) => setMsg(erro.message));
    }

    return (
        <div className={styles.geral_container}>
            {mensagem && <Mensagem type="sucesso" msg={mensagem} />}
            {msg && <Mensagem type="sucesso" msg={msg} />}
            <div className={styles.title_container}>
                <h1>Restaurante</h1>
                <LinkButton to="/restaurante/novo" text="Novo Restaurante" />
            </div>
            <Container customClass="start">
                {restaurante.length > 0 &&
                    restaurante.map((res: RestauranteData) => (
                        <ItemCard
                            id={res.id}
                            name={res.name}
                            price={res.price}
                            tipo={res.tipos.name}
                            key={res.id}
                            handleRemove={removeRestaurante}
                        />
                    ))
                }
                {
                    restaurante.length === 0 && <p>Não há itens cadastrados</p>
                }
            </Container>
        </div>
    );
}

export default Geral;