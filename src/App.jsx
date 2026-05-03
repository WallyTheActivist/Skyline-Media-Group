import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

// Route-level code splitting: each page is a separate JS chunk.
// Browsers only download the chunk for the route the visitor actually visits.
const HomePage    = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const WorkPage    = lazy(() => import("./pages/WorkPage"));
const AboutPage   = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));

// Minimal fullscreen skeleton shown during chunk download (<100 ms on broadband).
function PageLoader() {
  return (
    <div
      aria-hidden="true"
      className="min-h-screen bg-midnight"
    />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <div className="bg-white text-ink">
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"         element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work"     element={<WorkPage />} />
            <Route path="/about"    element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

