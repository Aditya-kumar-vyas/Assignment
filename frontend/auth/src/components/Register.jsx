import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", form);
      console.log("Response:", res.data);
      alert("User registered successfully!");
    } catch (err) {
      console.error("Error:", err.response.data.message);
      alert(err.response.data.message || "Registration failed!");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 flex-col items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4 mx-40">Sign Up</h2>
        <input
          name="username"
          placeholder="Username"
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          className="border p-2 w-full mb-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mx-40"
        >
          Register
        </button>
      </form>
    </div>
  );
}
