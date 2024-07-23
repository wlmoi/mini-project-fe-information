"use client";  // Mark as a client component

import React, { useState } from 'react';

const TodoApp = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index: number) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        className="flex-1 px-4 py-2 border rounded-l"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button
                        onClick={addTask}
                        className="px-4 py-2 bg-blue-500 text-white rounded-r"
                    >
                        Add
                    </button>
                </div>
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index} className="border-b py-2 flex justify-between items-center">
                            <span>{task}</span>
                            <button
                                onClick={() => deleteTask(index)}
                                className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;
