import React, { useState } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import "./App.css";
import bgImage from "/bg.jpg";

function Kanban({ toggleModel }) {
  return ReactDOM.createPortal(
    <Draggable handle=".drag-header">
      <div className="fixed top-28 right-36 transform -translate-x-1/2 bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 w-[90%] max-w-[800px]">
        <div className="drag-header flex items-center justify-between p-3 bg-gray-700 rounded-t-lg cursor-grab active:cursor-grabbing">
          <h2 className="text-white text-lg font-bold">Draggable component</h2>
          <button
            onClick={toggleModel}
            className="text-gray-400 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>
        <div className="p-4 bg-gray-800 rounded-b-lg text-gray-300 flex justify-center">
          <div className="mt-4 w-1/2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg shadow-sm">
              Your Children here
            </div>
          </div>
        </div>
      </div>
    </Draggable>,
    document.body
  );
}

function App() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <div
      className="bg-zinc-800 h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={toggleModel}
        className="fixed bottom-10 bg-blue-500 px-5 py-3 rounded-full text-white font-semibold shadow-lg hover:bg-blue-600 transition"
      >
        Open Kanban
      </button>
      {isModelOpen && <Kanban toggleModel={toggleModel} />}
    </div>
  );
}

export default App;
