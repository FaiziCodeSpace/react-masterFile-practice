import style from './css/style.module.css'
import './css/style.css';
import styled from 'styled-components';

function Revision2(){
    const Navigator = styled.div`
        background-color: pink;
        width: 200px;
        height: 200px;
        border-radius: 20px;
        margin: 20px;
    `;
    function caller(name){
        alert(name)
    }
    return(
        <>
            <Navigator>
                <h1 style={{margin: '20px', textAlign: 'center'}}>Hello</h1>
            </Navigator>
           <h1 className={style.header}>Hello there</h1> 
           <h1 className='header'>Hello there</h1> 

           
           
        </>
    )
}
export default Revision2;