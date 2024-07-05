import React from "react";
import TaskList from "@/components/TaskList";

const AllTasks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      <TaskList filter="all" />
    </div>
  );
};

export default AllTasks;