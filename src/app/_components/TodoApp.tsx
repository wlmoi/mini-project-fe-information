"use client"; // Mark as a client component (Diproses di browser bukan diserver)

import React, { useState } from 'react';
import { Button } from "~/components/ui/button"; // Import Button yang sudah tersedia

// Credit ide interface dari Carlo Angkisan STEI-K, terima kasih puh sepuh
interface Task {
  id: number;
  title: string;
  created: string;
  status: "To Do" | "Done";
}

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const currentTimestamp = new Date().toLocaleDateString();

  // Fungsi untuk menambahkan task baru
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask.toUpperCase(),
          created: currentTimestamp,
          status: "To Do",
        },
      ]);
      setNewTask('');
    }
  };

  // Fungsi untuk menghapus task berdasarkan id
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Fungsi untuk toggle status task
  const toggleStatus = (id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === "To Do" ? "Done" : "To Do" }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Main container for the To-Do List */}
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        {/* Section for adding a new task */}
        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-l"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <Button
            onClick={addTask}
            className="px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 border border-teal-500 rounded-r invert-color"
          >
            Add
          </Button>
        </div>

        {/* Section for displaying the list of tasks */}
        <ul>
          {tasks.length === 0 ? (<p className="text-md text-center font-mono font-thin text-gray-600 text-opacity-50">No tasks available...</p>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="border-b py-2 flex justify-between items-center">
                <span>{task.title} - {task.status}</span>
                <div className="flex space-x-2">
                  <Button
                    onClick={() => toggleStatus(task.id)}
                    className={`px-2 py-1 ${task.status === "To Do" ? "bg-yellow-500 text-white hover:bg-yellow-600 border border-yellow-500 invert-color" : "bg-blue-500 text-white hover:bg-blue-600 border border-blue-500 invert-color"}`}
                  >
                    {task.status === "To Do" ? "Complete" : "Undo"}
                  </Button>
                  <Button
                    onClick={() => deleteTask(task.id)}
                    className="px-2 py-1 bg-red-500 text-white hover:bg-red-600 border border-red-500 invert-color"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
