// Importante: importar para que os estilos do arquivo façam parte do arquivo
import "./Rodape.css";

function Rodape() {
    const Instagram = "Instagram";
    const Linkedin = "Linkedin";
    const Contato = "Contato";

    return (
        <nav>
                <ul className="menu">
		            <li><a href="#">{Instagram}</a></li>
		            <li><a href="#">{Linkedin}</a></li>
		            <li><a href="#">{Contato}</a></li>
                </ul>
            </nav>
        
    );
}

export default Rodape;
