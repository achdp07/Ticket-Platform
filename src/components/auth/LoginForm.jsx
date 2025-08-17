import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function LoginForm() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Simple mock login logic (replace with Firebase/Auth later)
    if (email === "admin@test.com" && password === "admin123") {
      login("admin");
      navigate("/admin"); // redirect to admin dashboard
    } else {
      login("user");
      navigate("/events"); // redirect to events page
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-sm mx-auto p-4 border rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full mb-2 p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
