export default function EditUser(){
    return(<>
      <h1 style={{textAlign: "center"}}>Edit User</h1>
        <form className="post-Form edit">
            <input type="text" name="username" placeholder="Username"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="age" placeholder="Age"/>
            <button type="submit">Edit User</button>
        </form>
    </>)
}