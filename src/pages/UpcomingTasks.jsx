import React from "react";
import TaskList from "@/components/TaskList";

const UpcomingTasks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming Tasks</h1>
      <TaskList filter="upcoming" />
    </div>
  );
};

export default UpcomingTasks;