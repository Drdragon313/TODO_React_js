import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos  ",
  initialState,
  reducers: {
    setInititalState: (state, action) => {
      const listOfTodos = action.payload;
      state.todos = listOfTodos;
    },
    addTodoSlice: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodoSlice: (state, action) => {
      const { id, newText } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = newText;
      }
    },
    toggleDoneSlice: (state, action) => {
      const { id } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.done = !existingTodo.done;
      }
    },
  },
});

export const {
  addTodoSlice,
  removeTodo,
  editTodoSlice,
  toggleDoneSlice,
  setInititalState,
} = todoSlice.actions;
export default todoSlice.reducer;
