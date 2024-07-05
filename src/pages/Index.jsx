import React from "react";
import AddTaskModal from "@/components/AddTaskModal";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Welcome to the Todo App</h1>
      <p>Manage your tasks efficiently and effectively.</p>
      <AddTaskModal />
    </div>
  );
};

export default Index;