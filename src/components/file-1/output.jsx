import Users from "./user"

function Boards(){
    const users = [
        {
      id: "1",
      name: "Faizan",
      age: 21,
      lastName: "khan",
    },
    {
      id: "2",
      name: "Alyan",
      age: 18,
      lastName: "khan",
    },
    {
      id: "3",
      name: "Muskan",
      age: 13,
      lastName: "Fatima",
    },
    {
      id: "4",
      name: "Jawaid",
      age: 41,
      lastName: "khalid",
    }
    ]
    return(
        <div>
            <Users input={users}/>
        </div>
    )
}
export default Boards;