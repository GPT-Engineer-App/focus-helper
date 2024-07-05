import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/lib/api";
import TaskItem from "@/components/TaskItem";

const TaskList = ({ filter }) => {
  const { data: tasks, error, isLoading } = useQuery({
    queryKey: ["tasks", filter],
    queryFn: () => fetchTasks(filter),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading tasks</div>;

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;