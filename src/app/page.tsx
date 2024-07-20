import React, { useState } from "react";
import { Button } from "~/components/ui/button";

function TodoList() {
  // Penentu state untuk menyimpan daftar todo dan todo baru
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Fungsi untuk menambahkan todo baru ke dalam daftar
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]); // Menambahkan todo baru ke dalam array todos
      setNewTodo(""); // Mengosongkan input setelah todo ditambahkan
    }
  };

  return (
    <div>
      <h1>Daftar Tugas</h1>
      {/* Input untuk menambah todo baru */}
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Masukkan tugas baru" 
      />
      {/* Tombol untuk menambah todo */}
      <Button className="text-primary-foreground" onClick={addTodo}>Tambah Tugas</Button>
      {/* Menampilkan daftar todo */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
