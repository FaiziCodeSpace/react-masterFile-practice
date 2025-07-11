function Users({input}){
    return(
        <div >
            {input.map((e)=>(
                <div style={{
        border: '2px solid green',
        padding: '20px',
        margin: '20px',
        borderRadius: '10px'
}}>
                    <h1>Name:{e.name}</h1>
                    <h1>Last Name:{e.lastname}</h1>
                    <h1>Age:{e.age}</h1>
                </div>
            ))}
        </div>
    )
}

export default Users;