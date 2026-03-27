"use client";

export default function HomeButton() {
  return (
    <button
      onClick={() => (window.location.href = "/")}
      className="fixed top-4 right-4 z-50 bg-[var(--color-ghost)] px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition"
    >
      ⬅ Home
    </button>
  );
}