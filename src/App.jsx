import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AIDataAnalytics from "./pages/AIDataAnalytics";
import Cybersecurity from "./pages/Cybersecurity";
import Academy from "./pages/Academy";
import Contacts from "./pages/Contacts";
import DesignSystem from "./pages/DesignSystem";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/servizi" element={<Services />} />
        <Route path="/ai-data-analytics" element={<AIDataAnalytics />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/formazione" element={<Academy />} />
        <Route path="/contatti" element={<Contacts />} />
        <Route path="/design-system" element={<DesignSystem />} />
      </Routes>
    </MainLayout>
  );
}

export default App;