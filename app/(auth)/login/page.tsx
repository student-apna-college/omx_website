"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
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
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">

     
      <button
        onClick={() => (window.location.href = "/")}
        className="fixed top-4 right-4 z-50 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
      >
        ⬅ Home
      </button>

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-center justify-center relative bg-[tomato]/20 backdrop-blur-sm overflow-hidden">

        {/* Floating gradient circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[tomato]/30 blur-3xl animate-blob"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-orange-400/20 blur-3xl animate-blob animation-delay-2000"></div>

        <div className="relative z-10 max-w-lg space-y-6 flex flex-col items-center text-center">
          {/* Company Logo */}
          <Image
  src="/images/omx info.png"
  alt="OMX Logo"
  width={200}
  height={120}
  className="mb-4 object-contain "
/>

          <h1 className="text-2xl md:text-4xl font-extrabold text-black drop-shadow-lg">
            OMX Info Management
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-black/90 drop-shadow-md max-h-72 overflow-y-auto">
            Welcome to OMX Info Management (OM Group Company) offering Records & Information Management Services. We can help you manage and secure your company's greatest asset - your business information. We at OMX believe that your business data is only valuable if it is readily accessible when needed.
            <br /><br />
            Safety, compliance, quality, and innovation are at the heart of everything we do. By customizing our processes to your protocols, we make collaboration effortless.
          </p>
        </div>
      </div>

      {/* RIGHT LOGIN */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30">

          {/* SLIDER */}
          <div className="relative flex bg-gray-300 rounded-full p-1 mb-6">
            <div
              className={`absolute top-1 bottom-1 w-1/2 bg-[tomato] rounded-full transition-all duration-300 ${
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

          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-gray-800">
            {mode === "client" ? "Client Login" : "Admin Login"}
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            {mode === "client" ? (
              <input
                type="text"
                placeholder="Client ID"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[tomato] outline-none transition shadow-sm"
                onChange={(e) =>
                  setForm({ ...form, clientId: e.target.value })
                }
              />
            ) : (
              <input
                type="text"
                placeholder="User ID"
                required
                className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[tomato] outline-none transition shadow-sm"
                onChange={(e) =>
                  setForm({ ...form, userId: e.target.value })
                }
              />
            )}

            <input
              type="password"
              placeholder="Password"
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[tomato] outline-none transition shadow-sm"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-[tomato] text-white py-3 rounded-xl font-bold hover:opacity-90 active:scale-95 transition shadow-lg"
            >
              {mode === "client" ? "Login as Client" : "Login as Admin"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}