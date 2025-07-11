import Props from "./props.jsx";


function Info(){
    const username = 'Faizan';
    const myRoutine = ['brush my teeths', 'breakfast', 'work for 2 hours', 'scroll insta', 'sleep', 'workout', 'family time', 'work till 11:30', 'in bed'];
    return(
        <div>
        <Props user={username} routine={myRoutine}>
             <h1 style={{color:'brown'}}>Welcome back! {username}</h1>
            <hr />
            {myRoutine.map((element, index)=>{
              return <h1 key={index}>ROUTINE: {element}</h1>
            })}
            <hr />
        </Props>

        </div>
    )
}

export default Info;