import React from 'react';
import './About.css';

function About(props){
    //react-router에 의해서 전달 된 props, click-> data send 할수 있다
    console.log(props);
    return(
        <div className='about__container'>
            <span>
                “Freedom is the freedom to say that two plus two make four. If that is granted, all else follows.”
            </span>
            <span> - George Orwell, 1984</span>
        </div>
    )
}

export default About;