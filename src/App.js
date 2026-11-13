import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { Toaster } from "sonner";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
        <Toaster position="top-center" richColors />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </div>
  );
}

export default App;
