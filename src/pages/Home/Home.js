import React from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [usuario, setUsuario] = React.useState("");
  const [erro, setErro] = React.useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositorios = response.data;
        const repositoriosNome = [];
        repositorios.map((repositorio) => {
          repositoriosNome.push(repositorio.name);
        });
        setErro(false);
        localStorage.setItem(
          "repositorioName",
          JSON.stringify(repositoriosNome)
        );
        history.push("/repositorios");
      })
      .catch((error) => {
        setErro(true);
      });
  }

  return (
    <S.HomeContainer>
      <S.Container>
        <S.Input
          placeholder="Usuário"
          className="usuarioInput"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        ></S.Input>
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
        {erro ? <S.ErroMsg>Ocorreu um erro. Tente novamente!</S.ErroMsg> : ""}
      </S.Container>
    </S.HomeContainer>
  );
};

export default Home;
