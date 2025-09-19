import React from 'react';

const Header = () => {
  return (
    <header>
      <img src="/perfil.jpg" alt="Foto de perfil de João Eduardo" className="profile-picture" />
      <div>
        <h1>João Eduardo Brandenburg de Almeida</h1>
        <ul>
          <li>Desenvolvedor Full Stack Python na <a href="https://ebaconline.com.br/sale/referral?grsf=1jgdi5" target="_blank" rel="noopener noreferrer">EBAC</a></li>
          <li>Técnico em Informática no <a href="https://vascocoutinho.ceet.secti.es.gov.br/" target="_blank" rel="noopener noreferrer">Ceet Vasco Coutinho</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
