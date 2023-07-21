import './App.css';
import Header from "./components/Header.js";
import Workout from "./components/Workout.js";
import Nutrition from "./components/Nutrition.js";
import Intro from "./components/Intro.js";
import Progress from "./components/Progress.js";
import ChatBot from "./components/AIChatBot.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/fitmeter-v2" element={<Intro />} />
          <Route path="/fitmeter-v2/Progress" element={<Progress />} />
          <Route path="/fitmeter-v2/Workout" element={<Workout />} />
          <Route path="/fitmeter-v2/Nutrition" element={<Nutrition />} />
        </Routes>
        <ChatBot />
      </div>
    </Router>
  )
}

export default App;
