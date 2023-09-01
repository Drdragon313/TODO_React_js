import "./style.scss";
import Button from "../components/Button/button";
import Heading from "../components/Heading/heading";
import Textbox from "../components/TextBox/textbox";
import Navbar from "../components/Header/header";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoSlice,
  setInititalState,
  editTodoSlice,
  toggleDoneSlice,
  removeTodo,
} from "../Features/todo/todoSlice";
import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const todos = useSelector((state) => state.todo.todos);
  const localStorageKey = `user_${user.id}_todos`;

  const [newTodo, setNewTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTodo, setEditedTodo] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDoneTasks, setShowDoneTasks] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const lsList = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    if (lsList?.length > todos?.length) {
      dispatch(setInititalState(lsList));
    }
    setLoading(false);
  }, [dispatch, localStorageKey]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [localStorageKey, todos]);

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(addTodoSlice(newTodo));
    setNewTodo("");
  };

  const editTodo = (index) => {
    if (editingIndex === index) {
      dispatch(editTodoSlice({ id: todos[index].id, newText: editedTodo }));
      setEditingIndex(null);
      setEditedTodo("");
    } else {
      setEditedTodo(todos[index].text);
      setEditingIndex(index);
    }
  };

  const toggleDone = (index) => {
    dispatch(toggleDoneSlice({ id: todos[index].id }));
  };

  return (
    <div className="App">
      <Navbar />
      <div className="todocontainer">
        <Heading text="Home Page" />
        <div className="searchItem">
          <Textbox
            placeholder="Search Todo"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Textbox
            type="checkbox"
            checked={showDoneTasks}
            onChange={() => setShowDoneTasks(!showDoneTasks)}
          />
          <label>Show Done Tasks</label>
        </div>
        <div className="flex-container">
          <Textbox
            placeholder="Enter New Task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addTodo(e);
              }
            }}
          />
          <Button text="ADD" onClick={addTodo} />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="todolist">
            <ul>
              {todos.map((todo, index) => {
                if (
                  (showDoneTasks && !todo.done) ||
                  !todo.text.includes(searchTerm.toLowerCase())
                ) {
                  return null;
                }
                return (
                  <li key={index} className={todo.done ? "done" : ""}>
                    {editingIndex === index ? (
                      <>
                        <Textbox
                          value={editedTodo}
                          onChange={(e) => setEditedTodo(e.target.value)}
                        />
                        <Button text="Save" onClick={() => editTodo(index)} />
                      </>
                    ) : (
                      <>
                        {todo.text}
                        <Button
                          text="Edit"
                          onClick={() => editTodo(index)}
                          disabled={todo.done}
                        />
                        <Button
                          text="Remove"
                          onClick={() => dispatch(removeTodo(todo.id))}
                        />
                        <Button
                          text={todo.done ? "Undone" : "Done"}
                          onClick={() => toggleDone(index)}
                        />
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
