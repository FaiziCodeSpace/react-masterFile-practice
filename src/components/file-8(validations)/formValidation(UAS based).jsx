import { useActionState } from "react";

export default function FormValidationUASBased() {
  const [data, action, pending] = useActionState(forming);

  function forming(prevData, formData) {
    const name = formData.get("name");
    const password = formData.get("password");
    const regex = /^[A-Za-z0-9]*$/i;
    if (name.length > 5) {
      return {
        error: "The name cannot be longer than 5 characters",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        passError: "The password can only contain Alphabets and Numbers",
        name,
        password,
      };
    } else {
      return { msg: "Signed in!", name, password };
    }
  }

  return (
    <>
      <div className="form-wrapper">
        <form className="validation-Form" action={action}>
          <input
            defaultValue={data?.name}
            className={data?.error ? "invalid" : ""}
            type="text"
            name="name"
            placeholder="Enter Your Username"
          />
          <p style={{ color: "red" }}>{data?.error}</p>
          <br />

          <input
            defaultValue={data?.name}
            className={data?.passError ? "invalid" : ""}
            type="text"
            name="password"
            placeholder="Enter Your Password"
          />
          <p style={{ color: "red" }}>{data?.passError}</p>
          <p style={{ color: "Green" }}>{data?.msg}</p>

          <br />
          <br />
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}
