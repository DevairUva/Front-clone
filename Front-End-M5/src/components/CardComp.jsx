import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from 'react';
function CardComp() {

    const [nome, setNome] = useState('')
    // const [descricao, setDescricao] = useState('')
    // const [data_criacao, setData_criacao] = useState('')

    useEffect(() => {
        const options = { method: 'GET', url: 'http://localhost:3000/tarefa' };
        axios.request(options).then(function (response) {
            setNome(response.data[0].nome)
            // setDescricao(response.data[0].descricao)
            // setData_criacao(response.data[0].data_criacao)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    console.log(nome)

    return (
        <div>
            <br/>
            <Card>
                <Card.Header>a</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            av
                        </p>
                        <footer className="blockquote-footer">
                            b
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            console.log(nome)
        </div>
    );
}

export default CardComp;