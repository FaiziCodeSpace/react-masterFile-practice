import Aviations from "./aviation";

function List({countries}){
    return(
        <div>
            {
                countries.map((info, index)=>(
                    <div key={index} style={
                        {
                            background: 'lightpink',
                            color: 'white',
                            padding: '60px',
                            margin: '20px',
                            border: '5px solid red',
                            borderRadius: '10px'
                        }
                        }> 
                        <ul>
                            <li><h3>Country:{info.country}</h3></li>
                            <li><h3>Continent:{info.continent}</h3></li>
                            <li><h3>System:{info.system}</h3></li>
                            <Aviations info={info.aviation}/>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default List;