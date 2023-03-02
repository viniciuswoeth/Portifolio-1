import React from "react";
import './styles.css'
import OIP from '../../assets/OIP.jpeg';

function Comments (props){
    return (
        <>
            <div class="wrapper-comment">
                <div class="box-comment">
                    <i class="fas fa-quote-left quote"></i>
                    <p id="comment">{props.comment}</p>
                    <div class="content-comment">
                        <div class="info-comment">
                            <div class="name-comment">{props.name}</div>
                            <div class="job-comment">{props.job}</div>
                        </div>
                        <div class="image-comment">
                        <img src={OIP} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comments;