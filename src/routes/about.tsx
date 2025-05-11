import { createFileRoute } from "@tanstack/react-router";
import { create } from "zustand";

// Sample zustand store
const useCounterStore = create<{ count: number; inc: () => void }>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  const { count, inc } = useCounterStore();
  return (
    <div className="p-2">
      <div>Hello from About!</div>
      <div className="mt-4 flex items-center gap-2">
        <span>Count: {count}</span>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={inc}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
