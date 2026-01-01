import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";
import VideoCard from "./components/VideoCard";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="layout">
        <Sidebar />
        <VideoCard/>
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;
