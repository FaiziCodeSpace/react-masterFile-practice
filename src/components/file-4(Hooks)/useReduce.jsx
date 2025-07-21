import { useReducer } from "react";

const emptyData = {
  username: "",
  email: "",
  age: "",
  fatherName: "",
  password: "",
};
function reducer(data, action) {
  return { ...data, [action.type]: action.val };
}
export default function UseReduceForm() {
  const [state, dispatch] = useReducer(reducer, emptyData);
  console.log(state);
  return (
    <>
      <h1
        style={{
          position: "absolute",
          top: "8%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        UseReduceForm
      </h1>
      <div className="form-wrapper">
        <form className="validation-Form r-form">
          <input
            type="text"
            onChange={(e) =>
              dispatch({ val: e.target.value, type: "username" })
            }
            placeholder="Username"
          />
          <input
            type="text"
            onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
            placeholder="Email"
          />
          <input
            type="text"
            onChange={(e) => dispatch({ val: e.target.value, type: "age" })}
            placeholder="Age"
          />
          <input
            type="text"
            onChange={(e) =>
              dispatch({ val: e.target.value, type: "fatherName" })
            }
            placeholder="Father Name"
          />
          <input
            type="text"
            onChange={(e) =>
              dispatch({ val: e.target.value, type: "password" })
            }
            placeholder="Password"
          />
        </form>
        <div className="form-Output">
          <p>
            <span>Username:</span> {state.username}
          </p>
          <p>
            <span>Email:</span> {state.email}
          </p>
          <p>
            <span>Age:</span> {state.age}
          </p>
          <p>
            <span>Father Name:</span> {state.fatherName}
          </p>
          <p>
            <span>Password:</span> {state.password}
          </p>
        </div>
      </div>
    </>
  );
}
