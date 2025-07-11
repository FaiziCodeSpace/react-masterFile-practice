import './css/style.css';
import style from './css/style.module.css'

function External(){
    const user = 'Faizan';
    return(
        <>
            <div>
                <h1 className={style.header}>Hello {user}</h1>
                <h1 className='header'>Hello {user}</h1>
            </div>
        </>
    )
}
export default External;