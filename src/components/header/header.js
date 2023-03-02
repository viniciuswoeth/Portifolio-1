import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/logo2.png';

function Header (){

    const navigate = useNavigate();

    return (
        <header>
            <img onClick={() => navigate('/')} id='logo' alt='' src={Logo} />
            <input class="side-menu" type="checkbox" id="side-menu"/>
            <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
                <nav class='nav'>
                    <ul class='menu'>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/contato')}>Contatos</li>
                        <li onClick={() => navigate('/fotos')}>Fotos</li>
                        <li onClick={() => navigate('/comentarios')}>Comentarios</li>
                    </ul>
                </nav>
        </header>
    ) 
}


export default Header;