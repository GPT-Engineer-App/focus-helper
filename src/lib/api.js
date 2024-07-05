export const fetchTasks = async (filter) => {
  // Mock API call
  const tasks = [
    { id: 1, title: "Task 1", description: "Description 1", dueDate: "2023-10-01" },
    { id: 2, title: "Task 2", description: "Description 2", dueDate: "2023-10-02" },
    { id: 3, title: "Task 3", description: "Description 3", dueDate: "2023-10-03" },
  ];

  if (filter === "today") {
    return tasks.filter(task => new Date(task.dueDate).toDateString() === new Date().toDateString());
  }

  if (filter === "upcoming") {
    return tasks.filter(task => new Date(task.dueDate) > new Date());
  }

  return tasks;
};