import React,{useState , useEffect} from "react";
//we will import Header.js file into our App component
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodosList";
import "./App.css";


const App = () => {
  const initialstate = JSON.parse(localStorage.getItem("todos"))  || [];
  const [input , setInput] = useState("");
  const [todos , setTodos] = useState(initialstate);
  const [editTodo , setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input = {input}
          setInput ={setInput}
          todos = {todos}
          setTodos = {setTodos}
          editTodo = {editTodo}
          setEditTodo = {setEditTodo}

          />
        </div>
        <div>
          <TodosList 
          todos = {todos}
          setTodos = {setTodos}
          setEditTodo = {setEditTodo}
          />
        </div>

      </div>
    </div>
  );
};

export default App;
