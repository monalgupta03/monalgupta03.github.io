/**
 * =============================================================================
 * MAIN APPLICATION ENTRY POINT
 * =============================================================================
 * 
 * The root App component that sets up:
 *   - React Query for data fetching (QueryClientProvider)
 *   - Tooltip context for UI components (TooltipProvider)
 *   - Toast notifications (Toaster, Sonner)
 *   - Client-side routing (hashRouter)
 * 
 * All page routes are defined in the Routes component.
 * 
 * =============================================================================
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

// Page components - each handles its own route
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Books from "./pages/Books";
import Muse from "./pages/Muse";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// -----------------------------------------------------------------------------
// QUERY CLIENT SETUP
// -----------------------------------------------------------------------------

/**
 * React Query client instance
 * Manages caching and fetching of server state
 */
const queryClient = new QueryClient();

// -----------------------------------------------------------------------------
// APP COMPONENT
// -----------------------------------------------------------------------------

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Provides tooltip context for UI components */}
    <TooltipProvider>
      {/* Toast notification systems */}
      <Toaster />
      <Sonner />
      
      {/* Client-side router */}
      <HashRouter>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/books" element={<Books />} />
          <Route path="/muse" element={<Muse />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* 404 catch-all route - must be last */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THIS LINE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
