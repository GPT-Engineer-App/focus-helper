import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

const TaskItem = ({ task }) => {
  const { title, description, dueDate, id } = task;

  const handleEdit = () => {
    // Handle edit task
  };

  const handleDelete = () => {
    // Handle delete task
  };

  return (
    <Card className={`border ${new Date(dueDate) < new Date() ? "border-red-500" : ""}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <p className="text-sm text-muted-foreground">{format(new Date(dueDate), "PPP")}</p>
      </CardContent>
      <CardFooter className="flex space-x-2">
        <Button variant="outline" onClick={handleEdit}>Edit</Button>
        <Button variant="destructive" onClick={handleDelete}>Delete</Button>
      </CardFooter>
    </Card>
  );
};

export default TaskItem;