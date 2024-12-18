import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      console.log(res.data.token)
      alert('Login Successful');
    } catch (err) {
      console.error(err.response.data);
      alert('Error: ' + err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4 mx-40">Login</h2>
      <input
        name="username"
        placeholder="Username"
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mx-36">
        Login
      </button>
    </form>
  );
}
