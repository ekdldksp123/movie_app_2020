import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

/*
-Link를 사용하면 화면을 새로고침하지 않고 불러온다. href 대신 to를 사용해야 함!!!
    1.Link는 HashRouter 밖에서 사용 X
    2.
*/
function Navigation(){
    return(
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to={{
                pathname:'/about',
                state: {
                    fromNavigation: true
                }
            }}>About</Link>
        </div>
    )
}

export default Navigation;