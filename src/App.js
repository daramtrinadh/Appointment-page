import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import FindDoctors from "./components/FindDoctors";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/find-doctors' element={<FindDoctors />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
