import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { LoadingSpinner } from "./components/custom/loading-spinner";

// Layout components
import AuthLayout from "./layouts/auth";
import ProtectedLayout from "./layouts/protected";
import RootLayout from "./layouts/root";

// Lazy-loaded page components
const LandingPage = lazy(() => import("./pages/landing"));
const SignInPage = lazy(() => import("./pages/sign-in"));
const SignUpPage = lazy(() => import("./pages/sign-up"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const WalletsPage = lazy(() => import("./pages/wallets"));
const BudgetsPage = lazy(() => import("./pages/budgets"));
const TransactionsPage = lazy(() => import("./pages/transactions"));
const SplitExpensesPage = lazy(() => import("./pages/split-expenses"));
const SettingsPage = lazy(() => import("./pages/settings"));

// Router configuration
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        element: (
          <Suspense
            fallback={
              <AuthLoading>
                <LoadingSpinner centered text="Checking authentication..." />
              </AuthLoading>
            }
          >
            <Authenticated>
              <Navigate to="/protected" replace />
            </Authenticated>
            <Unauthenticated>
              <AuthLayout />
            </Unauthenticated>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense
                fallback={<LoadingSpinner centered text="Loading page..." />}
              >
                <LandingPage />
              </Suspense>
            ),
          },
          {
            path: "sign-in",
            element: (
              <Suspense
                fallback={<LoadingSpinner centered text="Loading sign in..." />}
              >
                <SignInPage />
              </Suspense>
            ),
          },
          {
            path: "sign-up",
            element: (
              <Suspense
                fallback={<LoadingSpinner centered text="Loading sign up..." />}
              >
                <SignUpPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "protected",
        element: (
          <Suspense
            fallback={
              <AuthLoading>
                <LoadingSpinner centered text="Checking authentication..." />
              </AuthLoading>
            }
          >
            <Authenticated>
              <ProtectedLayout />
            </Authenticated>
            <Unauthenticated>
              <Navigate to="/sign-in" replace />
            </Unauthenticated>
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense
                fallback={
                  <LoadingSpinner centered text="Loading dashboard..." />
                }
              >
                <DashboardPage />
              </Suspense>
            ),
          },
          {
            path: "wallets",
            element: (
              <Suspense
                fallback={<LoadingSpinner centered text="Loading wallets..." />}
              >
                <WalletsPage />
              </Suspense>
            ),
          },
          {
            path: "budgets",
            element: (
              <Suspense
                fallback={<LoadingSpinner centered text="Loading budgets..." />}
              >
                <BudgetsPage />
              </Suspense>
            ),
          },
          {
            path: "transactions",
            element: (
              <Suspense
                fallback={
                  <LoadingSpinner centered text="Loading transactions..." />
                }
              >
                <TransactionsPage />
              </Suspense>
            ),
          },
          {
            path: "split-expenses",
            element: (
              <Suspense
                fallback={
                  <LoadingSpinner centered text="Loading split expenses..." />
                }
              >
                <SplitExpensesPage />
              </Suspense>
            ),
          },
          {
            path: "settings",
            element: (
              <Suspense
                fallback={
                  <LoadingSpinner centered text="Loading settings..." />
                }
              >
                <SettingsPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
