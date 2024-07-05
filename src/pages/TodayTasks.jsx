import React from "react";
import TaskList from "@/components/TaskList";

const TodayTasks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today's Tasks</h1>
      <TaskList filter="today" />
    </div>
  );
};

export default TodayTasks;