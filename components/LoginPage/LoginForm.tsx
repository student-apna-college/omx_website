"use client";

import { useState } from "react";

export default function LoginForm() {
  const [mode, setMode] = useState("client");
  const [form, setForm] = useState({
    clientId: "",
    userId: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      mode === "client"
        ? `Client Login\nID: ${form.clientId}`
        : `Admin Login\nUser: ${form.userId}`
    );
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[var(--color-ghost)]/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-[var(--color-ghost)]/30">

        {/* SLIDER */}
        <div className="relative flex bg-gray-300 rounded-full p-1 mb-6">
          <div
            className={`absolute top-1 bottom-1 w-1/2 bg-[rgb(0,104,83)] rounded-full transition-all duration-300 ${
              mode === "admin" ? "left-1/2" : "left-0"
            }`}
          />
          <button
            onClick={() => setMode("client")}
            className={`w-1/2 z-10 py-2 text-sm font-semibold ${
              mode === "client" ? "text-white" : "text-gray-600"
            }`}
          >
            Client
          </button>
          <button
            onClick={() => setMode("admin")}
            className={`w-1/2 z-10 py-2 text-sm font-semibold ${
              mode === "admin" ? "text-white" : "text-gray-600"
            }`}
          >
            Admin
          </button>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-[var(--color-ink)]">
          {mode === "client" ? "Client Login" : "Admin Login"}
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {mode === "client" ? (
            <input
              type="text"
              placeholder="Client ID"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-green)] outline-none transition shadow-sm"
              onChange={(e) =>
                setForm({ ...form, clientId: e.target.value })
              }
            />
          ) : (
            <input
              type="text"
              placeholder="User ID"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-green)] outline-none transition shadow-sm"
              onChange={(e) =>
                setForm({ ...form, userId: e.target.value })
              }
            />
          )}

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-green)] outline-none transition shadow-sm"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button
            type="submit"
            className="w-full bg-[rgb(0,104,83)] text-white py-3 rounded-xl font-bold hover:opacity-90 active:scale-95 transition shadow-lg"
          >
            {mode === "client" ? "Login as Client" : "Login as Admin"}
          </button>
        </form>
      </div>
    </div>
  );
}