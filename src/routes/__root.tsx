import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // meta: [
    //   { charSet: "utf-8" },
    //   { name: "viewport", content: "width=device-width, initial-scale=1" },
    //   { title: "MAT.ai — AI No-Code / Low-Code Systems Engineer" },
    //   {
    //     name: "description",
    //     content:
    //       "Portfolio of an AI No-Code / Low-Code Systems Engineer designing voice agents, WhatsApp assistants, RAG systems and enterprise-grade automations with n8n, VAPI, OpenAI and Supabase.",
    //   },
    //   { property: "og:title", content: "MAT.ai — AI No-Code / Low-Code Systems Engineer" },
    //   {
    //     property: "og:description",
    //     content: "Voice agents, WhatsApp AI, RAG systems and n8n workflows built for production.",
    //   },
    //   { property: "og:type", content: "website" },
    //   { name: "twitter:card", content: "summary_large_image" },
    // ],
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      { title: "Muhammad Ahmad Tahir | AI Automation Engineer" },

      {
        name: "description",
        content:
          "Building Voice Agents, RAG Systems, WhatsApp AI Assistants, and Enterprise Automations with n8n, OpenAI, and Supabase.",
      },

      {
        property: "og:title",
        content: "Muhammad Ahmad Tahir | AI Automation Engineer",
      },
      {
        property: "og:description",
        content:
          "Building Voice Agents, RAG Systems, WhatsApp AI Assistants, and Enterprise Automations with n8n, OpenAI, and Supabase.",
      },
      {
        property: "og:image",
        content: "https://ahmad-ai-automation-portfolio.vercel.app/og-image.png",
      },
      {
        property: "og:url",
        content: "https://ahmad-ai-automation-portfolio.vercel.app",
      },
      { property: "og:type", content: "website" },

      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/MATIcon.png", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
