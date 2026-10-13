import Navbar from "./components/Navbar.jsx";
import PlanPicker from "./components/PlanPicker.jsx";
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