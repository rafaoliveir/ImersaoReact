import React from 'react';
import { FooterBase } from './styles';
import Logo1 from'../../assets/img/Logo1.png';

function Footer() {
  return (
    <FooterBase>
      <img className="Logo"src={Logo1} alt="Logo" />
      
      <p>by rafa :D</p>
      
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura 
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
