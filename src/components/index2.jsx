import React from "react";

export default function Index2() {
  return (
    <div>
      <header className="cabecalho">
        <h1 className="cabecalho___titulo">Meu Site</h1>
      </header>

      <section className="conteudo">
        <p className="conteudo___paragrafo">Bem-vindo ao meu site!</p>
        <a
          href="https://www.google.com"
          className="conteudo___link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ir para o Google
        </a>
      </section>

      <menu>
        <button className="menu">Clique Aqui</button>
        <input
          type="text"
          className="menu___campo-texto"
          placeholder="Digite algo..."
        />
        <select className="menu___seletor">
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>
          <option value="opcao3">Opção 3</option>
        </select>

        <div>
          <button className="botoes">Enviar</button>
          <button className="botoes">Limpar</button>
          <button className="botoes">Cancelar</button>
        </div>
      </menu>
    </div>
  );
}
