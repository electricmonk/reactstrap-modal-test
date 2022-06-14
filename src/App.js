import "./App.css";
import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowPopup(true)} className="btn">
        Click here to open the popup!
      </button>
      <Modal isOpen={showPopup} centered fade className="popup">
        <ModalBody>Popup text</ModalBody>
      </Modal>
    </div>
  );
}

export default App;
