import React, { useState } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";

function Login(props) {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <Input type="text" {...register("Username")} placeholder="Username" />
      <Input type="password" {...register("Password")} placeholder="Password" />
      <Input
        type="password"
        {...register("Confirm")}
        placeholder="Confirm Password"
      />
      <Input
        ref={React.forwardRef}
        type="text"
        {...register("Mobile")}
        placeholder="Mobile"
      />
      <p>{data}</p>
      <input
        type="submit"
        style={{ backgroundColor: "white", color: "black" }}
      />
    </form>
  );
}

export default Login;
