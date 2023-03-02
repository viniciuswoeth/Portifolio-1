import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';

function Contato() {

    return (
        <>
            <Header />
                <div id='banner'>                    
                    <form class='contact-form'> 
                        <div class='wrapper'>
                            <div class='input-data'>
                                <input name='name' type='text' required></input>
                                <div class='underline'></div>
                                <label for='name'>Full Name</label>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="input-data">
                                <input name="email" type="text" required></input>
                                <div class="underline"></div>
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div class="wrapper">
                            <div class="input-data">
                                <textarea name="mesage" type="text" required></textarea>
                                <div id="underline-textarea" class="underline"></div>
                                <label>Mesage</label>
                            </div>
                        </div>
                        <div class="container-form-btn">
                            <button class="form-button">Send</button>
                        </div>
                    </form>
                </div>
            <Footer />
        </>
    )
}

export default Contato;