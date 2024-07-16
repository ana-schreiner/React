import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Contato() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function cadastrar(data) {
    console.log("Contato!");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1>Contato</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome:</label>
          <input 
            type="text" 
            id="nome" 
            className="form-control"
            {...register("nome", {required: true, maxLength: 150})}
            />
            {errors.nome && <small className="invalid">O nome é obrigatório!</small>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            {...register("email", { required: "O email é obrgatório." })}
            />
            {errors.email && <small className="invalid">{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="feedback">Em que podemos ajudar?</label>
          <textarea  
            id="feedback" 
            className="form-control"
            rows={4}
            cols={40}
            {...register("feedback", {required: true})}
            />
            {errors.senha && <small className="invalid">Esqueceu de nos dizer do que precisa!</small>}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">
          Cadastrar
        </Button>
        <Button variant="danger" className="mt-1 w-100" type="button">
          Entrar com o Google
        </Button>
      </form>
    </main>
  );
}

export default Contato;