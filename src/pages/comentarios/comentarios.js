import React from "react";
import Comments from "../../components/Comments/comments";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import './styles.css'

function Comentarios () {
    return (
        <>
        <Header />
        <div id='banner'>
            <div id="body-comment">
                <Comments name='Alex Maison' job='Designer and Critic' comment='The Batman is a brave, bold and brilliant new take on a familiar character and Reeves 
                                    and Pattinson have done him proud. November 13, 2022 | Rating: 4/5 | Full Review… Matt Reeves 
                                    The Batman is a brutal, uncompromising vision that leaves its indelible mark in comic book film history.'/>

                <Comments name='Todd Gilchrist' job='The Wrap' comment='With Pattinson glowering beneath his cowl, Reeves creates a Batman whose psychology is at least as 
                                        interesting as his crime-fighting activities, for the first time in a long time.' />

                <Comments name='Liz Shannon Miller' job='Consequence' comment='What this film does achieve is telling a solid new Batman story, one with some pretty compelling 
                            twists and a strong point-of-view on who, exactly, the Caped Crusader is. By default, that makes it one of the better 
                            Batman movies ever made.' />
                            
                <Comments name='Vinicius Woeth' job='Developer' comment='This movie is extraordinarie, im very happy to what them.' />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Comentarios;