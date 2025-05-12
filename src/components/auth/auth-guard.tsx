import { useConvexAuth } from "convex/react";
import { useNavigate } from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";

interface AuthGuardProps {
  children: ReactNode;
  redirectTo?: string;
}

export function AuthGuard({
  children,
  redirectTo = "/sign-in",
}: AuthGuardProps) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useConvexAuth();

  // Use useEffect to handle redirection for unauthenticated users
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: redirectTo });
    }
  }, [isAuthenticated, isLoading, navigate, redirectTo]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  // If not authenticated, return null (redirection is handled by useEffect)
  if (!isAuthenticated) {
    return null;
  }

  // If authenticated, render children
  return <>{children}</>;
}
