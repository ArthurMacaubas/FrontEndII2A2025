"use client"
import { useState } from 'react';
import styles from './page.module.css';

export default function Produtos() {
    const produtos = [
        { id: 1, nome: "Notebook", preco: 4500 },
        { id: 2, nome: "Mouse", preco: 80 },
        { id: 3, nome: "Teclado", preco: 150 },
        { id: 4, nome: "Monitor", preco: 1200 },
        { id: 5, nome: "Impressora", preco: 900 },
        { id: 6, nome: "Cadeira Gamer", preco: 1800 },
        { id: 7, nome: "Headset", preco: 300 },
        { id: 8, nome: "Webcam", preco: 600 },
        { id: 9, nome: "HD Externo", preco: 400 },
        { id: 10, nome: "Mesa Digitalizadora", preco: 750 }
    ];

<<<<<<< HEAD
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const pares = numeros.filter(num => (num % 2 === 0))

    const nomes = ["Arthur", "Julia", "Maria"]
    const a = nomes.filter(name => (name.startsWith("A")))
    const b = nomes.filter(name => (name.includes("u")))
    const letra = "u"

    const [busca, setBusca] = useState("")
    const prodFilt = produtos.filter(prod => prod.nome.toLowerCase().includes(busca.toLowerCase()))

    const [show, setShow] = useState(false)

    return (
        <div>
            <div className={styles.divTitulo}>
                <h1>Produtos</h1>
                <input
                    type="text"
                    onChange={e => setBusca(e.target.value)}
                    value={busca}
                />
            </div>
            {show && <div onClick={() => setShow(false)} className={styles.modal}>
                
            </div>}
=======
    return (
        <div>
            <h1>Produtos</h1>
>>>>>>> 24b6429613ba494b3ccb00e5ba27b15b44aef887
            <table className={styles.tbl}>
                <thead>
                    <tr>
                        <th>ID</th>
<<<<<<< HEAD
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {prodFilt.map(produto => (
                        <tr onClick={() => setShow(true)} key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL"
=======
                        <th>NOME</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map( p => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco.toLocaleString('pt-br', {
                                style:'currency',
                                currency: 'BRL'
>>>>>>> 24b6429613ba494b3ccb00e5ba27b15b44aef887
                            })}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
<<<<<<< HEAD
            <div className={styles.Ps}>
                <p>Numeros pa.res: {pares}</p>
                <p>Começam com A: {a}</p>
                <p>Tem {letra} no nome: {b}</p>
                <p>Filtrando por: </p>
            </div>
        </div>
    )
}
=======
        </div>
    )
}


// Crie um componente chamado Produtos que possua o seguinte array:
// Os dados devem ser exibidos dentro de uma tabela.
// A tabela deve conter um <thead> com os títulos das colunas:ID,  Produto e Preço.
// Cada produto deve aparecer em uma linha (<tr>) dentro do <tbody>.
// O id deve estar dentro de uma célula <td>, onome deve estar dentro de outra célula <td> e o preço em outra <td>, com o formato R$ valor (utilize o toLocaleString para formatar).



// Adicione um campo de texto (<input>) acima da tabela para permitir que o usuário digite o nome de um produto.
/* Conforme o texto for digitado, mostre apenas os produtos cujo nome contenha o texto digitado (ignorando maiúsculas e minúsculas). */
// Use o método filter() para aplicar o filtro e map() para exibir os resultados na tabela. 
>>>>>>> 24b6429613ba494b3ccb00e5ba27b15b44aef887
