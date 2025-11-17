import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Onboard from "./home/Onboard";
import BasicsInstitution from "./home/BasicsInsititution";
import Courses from "./home/Courses";
import Ranking from "./home/Ranking";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <Header />
      <Onboard />
      <BasicsInstitution />
      <Courses />
      <Ranking />
      <Footer />
    </div>
  );
}

export default App;
