import { useState } from "react";
import uuid from "react-uuid";

import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("追加されました");
    const newNote = {
      id: uuid(),
      title: "NewNote",
      content: "content",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  return (
    <div className="App">
      <Sidebar onAddNote={onAddNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
