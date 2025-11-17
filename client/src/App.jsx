import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Onboard from "./home/Home";
import BasicsInstitution from "./home/About";
import Courses from "./home/Courses";
import Ranking from "./home/Ranking";
import Facilities from "./home/Facilities";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <Header />
      <Onboard />
      <BasicsInstitution />
      <Courses />
      <Ranking />
      <Facilities />
      <Footer />
    </div>
  );
}

export default App;
