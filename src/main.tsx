import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConvexReactClient } from "convex/react";
import { AnimatePresence } from "motion/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./router";

const queryClient = new QueryClient();

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider>
        <AnimatePresence mode="wait">
          <QueryClientProvider client={queryClient}>
            <ConvexAuthProvider client={convex}>
              <RouterProvider router={router} />
            </ConvexAuthProvider>
          </QueryClientProvider>
        </AnimatePresence>
        <Toaster position="top-center" />
      </ThemeProvider>
    </StrictMode>
  );
}
