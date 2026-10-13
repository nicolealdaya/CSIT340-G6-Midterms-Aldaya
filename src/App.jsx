import Navbar from "./components/Navbar.jsx/index.js";
import PlanPicker from "./components/PlanPicker.jsx/index.js";
import Footer from "./components/Footer.jsx";
 
function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />
      <PlanPicker />
      <Footer />
    </div>
  );
}
 
export default App;