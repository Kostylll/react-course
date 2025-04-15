import { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nome: " + name);
        console.log("Email: " + email);

        setName("");
        setEmail("");
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite seu Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <input type="submit" value="Enviar" />
      
      </form>
    </div>
  );
};

export default MyForm;
