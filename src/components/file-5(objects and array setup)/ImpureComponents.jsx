let anyRandomData=0;

function Component(){
    return(
        <>
            <Calculate/>
            <Calculate2 proms={0}/>
        </>
    )
}

function Calculate(){
    anyRandomData = anyRandomData + 1; // correct output without any problem 
    return(
        <>
            <h1>{anyRandomData}</h1>
        </>
    )
}

function Calculate2({proms}){
    let number = proms + 1;
    return(
        <>
            <h1>{number}</h1>
        </>
    )
}

export default Component;