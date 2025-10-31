'use client';
import { useEffect, useState } from 'react';
import styles from './localidades.module.css';

export default function Localidades() {
    const [busca, setBusca] = useState('')
    const [paises, setPaises] = useState([])
    const [pais, setPais] = useState([])
    const [filtrado, setFiltrado] = useState(null)

    const paisesFiltrados = paises.filter((pais) => pais.nome.toLowerCase().includes(busca.toLowerCase()))


    const getPaises = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome');
            console.log('Paises:', response)
            if (!response.ok) {
                throw new Error('Ocorreu um erro:', response.statusText);
            }

            const data = await response.json();
            console.log('Dados:', data)

            setPaises(data)

        } catch (e) {
            console.log('Ocorreu um erro ao muscar paises', e.message)
        }
    }

    useEffect(() => {
        getPaises();
    }, [])


    return (
        <table className={styles.tbl}>
        <thead>
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>REGIãO</th>
            </tr>
        </thead>
        <tbody>
            {paises.map((p, id) => (
                <tr key={id} onClick={() => setPais(p)
                }>
                    <td>{id}</td>
                    <td>{p.nome}</td>
                    <td>{id}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
}   