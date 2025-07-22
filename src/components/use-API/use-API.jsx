import { Suspense, use, useEffect } from "react";



const fetchData =()=> fetch('https://dummyjson.com/users').then((res)=>res.json());
const resources = fetchData();

export default function PrintAPI(){
    return(<>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Users resources={resources} />
        </Suspense>
        </>)
}

function Users({resources}){
    const usersData = use(resources);
    return(<>
        {
            usersData.users.map((user, index)=>(
                <h1 style={{textAlign:"center"}} key={index}>{index+1}: {user.firstName}</h1>
            ))
        }
    </>)
}