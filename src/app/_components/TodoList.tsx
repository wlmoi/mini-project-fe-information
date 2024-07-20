import React, { useState } from "react";
import { Button } from "~/components/ui/button";

function TodoList() {
  // Penentu state untuk menyimpan daftar todo dan todo baru
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Fungsi untuk menambahkan to do baru ke dalam daftar
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]); // Menambahkan to do baru ke dalam array todos
      setNewTodo(""); // Mengosongkan input setelah to do sudah ditambahkan
    }
  };

  return (
    <div>
      <h1>Daftar Tugas</h1>
      {/* Input untuk menambah to do baru */}
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Masukkan tugas baru" 
      />
      {/* Tombol untuk menambah to do */}
      <Button className="text-primary-foreground" onClick={addTodo}>Tambah Tugas</Button>
      {/* Menampilkan daftar to do */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
