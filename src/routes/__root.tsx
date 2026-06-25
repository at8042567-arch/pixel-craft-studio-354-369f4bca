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
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AreneX Techworks | Custom Web Development — Pakistan" },
      { name: "description", content: "AreneX Techworks builds custom websites and web applications for startups and businesses in Pakistan. No templates. Fast, professional, built to convert. Get a proposal in 48 hours." },
      { name: "keywords", content: "web development Pakistan, custom website Pakistan, web developer Lahore, web development agency Pakistan, Next.js developer Pakistan, startup website Pakistan, e-commerce development Pakistan" },
      { name: "author", content: "AreneX Techworks" },
      { property: "og:title", content: "AreneX Techworks | Custom Web Development Pakistan" },
      { property: "og:description", content: "Custom websites and web apps for businesses serious about growth. Pakistan's premium web development studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@arenextechworks" },
      { name: "twitter:title", content: "AreneX Techworks | Custom Web Development Pakistan" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@200;300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap" },
      { rel: "icon", type: "image/png", href: "/__l5e/assets-v1/1e648a00-75b3-48a2-a383-181d30683d54/arenex-logo.png" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "AreneX Techworks",
          "description": "Custom web development studio in Pakistan building websites and web applications for startups and businesses.",
          "url": "https://arenextechworks.com",
          "email": "Arenextechworks@gmail.com",
          "telephone": "+923434247850",
          "address": { "@type": "PostalAddress", "addressCountry": "PK" },
          "sameAs": ["https://instagram.com/arenextechworks", "https://x.com/arenextechworks"],
          "priceRange": "PKR 50,000 – 500,000+",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Development Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Website Development" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "E-Commerce Development" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Development" } },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What does AreneX Techworks build?", "acceptedAnswer": { "@type": "Answer", "text": "AreneX Techworks builds custom websites, e-commerce stores, web applications, and landing pages for businesses in Pakistan and internationally. Every project is built from scratch — no templates." } },
            { "@type": "Question", "name": "How much does a website cost at AreneX Techworks?", "acceptedAnswer": { "@type": "Answer", "text": "Business websites start from PKR 50,000. E-commerce stores start from PKR 100,000. Custom web applications start from PKR 200,000. International projects are priced in USD." } },
            { "@type": "Question", "name": "How long does it take to build a website?", "acceptedAnswer": { "@type": "Answer", "text": "Standard business websites take 2–3 weeks. E-commerce and web applications take 4–6 weeks depending on complexity." } },
            { "@type": "Question", "name": "Does AreneX Techworks work with international clients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. AreneX Techworks works with clients in the UK, UAE, USA, and globally. Communication is in English and projects are priced in USD for international clients." } },
            { "@type": "Question", "name": "Who owns the code after the project is done?", "acceptedAnswer": { "@type": "Answer", "text": "You do. 100%. AreneX Techworks provides a full code handover with documentation. No lock-in." } },
          ],
        }),
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
