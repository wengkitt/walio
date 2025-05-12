import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { AnimatePresence } from "motion/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { routeTree } from "./routeTree.gen";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

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
        <Toaster position="top-right" />
      </ThemeProvider>
    </StrictMode>
  );
}
