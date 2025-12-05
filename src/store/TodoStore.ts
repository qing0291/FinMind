import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "../storage/mmkv";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      addTodo: (text: string) => {
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, completed: false }],
        }));
      },
      toggleTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => zustandStorage),
      partialize: (state) => ({ todos: state.todos }), //Only persist todos
    }
  )
);


