import axios from "axios";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/admin", {
        email,
        password,
      });
      console.log(response);

      const { message, error } = response.data;
      if (message) {
        localStorage.setItem("token", message);
        console.log(`this is from backend: ${message}`);
      } else if (error) console.log(error);
    } catch (error) {
      console.log(error.message);
    }
    console.log(`Submitted: email: ${email}, password: ${password}`);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className=" h-screen w-full flex items-center justify-center font-courgette">
      <form
        className=" flex flex-col gap-2 shadow-md shadow-slate-400 p-4"
        onSubmit={handleLogin}
      >
        <h2 className=" text-xl font-bold mb-4">
          Enter your credentials to login
        </h2>
        <label htmlFor="email" className=" font-bold">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleEmailChange}
          placeholder="Enter your email here"
          className=" px-2 outline-none mb-2"
        />
        <label htmlFor="password" className=" font-bold">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          placeholder="Enter your password here"
          className=" px-2 outline-none mb-2"
        />
        <button
          type="submit"
          className=" bg-cyan-500 hover:bg-cyan-400 rounded px-4 py-2 font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
