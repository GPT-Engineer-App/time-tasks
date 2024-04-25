import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1" />
            <Button onClick={handleAddTodo}>Add</Button>
          </div>
          <ul className="mt-4">
            {todos.map((todo) => (
              <li key={todo.id} className="flex justify-between items-center p-2">
                {todo.text}
                <Button variant="destructive" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <p>
            {todos.length} {todos.length === 1 ? "item" : "items"}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
