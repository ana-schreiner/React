import './Home.css';

function CardProduto(props) {
    const valorDesconto = (props.precoUnitario - props.precoUnitario * (props.desconto/100)).toFixed(2);

    const handleComprarClick = () => {
        // Lógica para o clique no botão comprar
        console.log('Botão Comprar clicado');
    };
    
    return (
        <article className="card-produto">
            <img src={props.imagem} alt={props.nome} className="produto-imagem" />
            <p>{props.nome}</p>
            {props.desconto > 0 && <p className="grifado">R$ {props.precoUnitario.toFixed(2)}</p>}
            {props.desconto > 0 ? <h4>R$ {valorDesconto}</h4> : <h4>R$ {props.precoUnitario.toFixed(2)}</h4>}
            {props.desconto > 0 && <p className="desconto">{props.desconto}% OFF</p>}
            <button className="botao-comprar" onClick={handleComprarClick}>Comprar</button>
        </article>
    );
}

export default CardProduto;
