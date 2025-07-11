
function Typer({fetcher}){
    return(
        <div>
            <input type="text" onChange={(e)=>fetcher(e.target.value)} placeholder="TYPE ANYTHING..." />
            <hr />
        </div>
    )
}
export default Typer;