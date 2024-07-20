import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

import React from 'react';
import TodoList from '~/app/_components/TodoList'; // Adjust the import path as needed

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <TodoList />
    </div>
  );
};

export default Home;
