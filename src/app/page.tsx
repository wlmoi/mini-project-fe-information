"use client"; // Tandai sebagai komponen klien

import React from "react";
import dynamic from "next/dynamic";

// Import komponen TodoApp secara dinamis
const TodoApp = dynamic(() => import("~/app/_components/TodoApp"), { ssr: false });

function Page() {
  return (
    <div
      className="min-h-screen text-foreground flex items-center justify-center p-4"
      style={{
        fontFamily: "'REM'",
        background: 'radial-gradient(circle, #a1e5e8 0%, #5e35b1 100%)'
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=REM:wght@400;700&display=swap');\
          /*font style agar sama dengan dikpus*/
          .font-rem {
            font-family: 'REM';
          }
          /*for the wlmoi*/
          .link-hover {
            transition: opacity 0.4s ease;
          }
          .link-hover:hover {
            opacity: 0.6;
          }
        `}
      </style>
      {/* Kontainer utama untuk To-Do List */}
      <div className="bg-card p-6 rounded-lg shadow-lg w-full max-w-md mx-4 sm:mx-6 lg:mx-8 xl:mx-auto font-rem">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">To-Do List</h1>
        <h5 className="text-center">Mini Project untuk IT Front End KAT-ITB 2024</h5>
        {/* Bagian untuk aplikasi */}
        <TodoApp />
        <p className="text-right">
          <a
            href="https://instagram.com/wlmoi"
            className="link-hover"
          >
            -@wlmoi
          </a>
        </p>
      </div>
    </div>
  );
}

export default Page;
