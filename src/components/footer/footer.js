import React from "react";
import './styles.css';
import Logo from '../../assets/logo2.png';

function Footer (){

    return (
        <footer>
            <img id='logo' alt='Navegador nao sportado' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Vinicius Woeth</span>
        </footer>
    ) 
}


export default Footer;