export default function Map() {
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
    return (
        <div>
            <h1>MAP</h1>
            <ul>
                {nomes.map((nome, id) => (
                    <li key={id}>{nome}</li>
                ))}
            </ul>
        </div>
    )
}

