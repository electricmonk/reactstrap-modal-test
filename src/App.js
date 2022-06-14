// import "./App.css";
import * as React from 'react';
import { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShowPopup(true)} data-testid="btn">
        Click here to open the popup!
      </button>
      <Modal isOpen={showPopup} centered fade>
        <ModalBody>Popup text</ModalBody>
      </Modal>
    </div>
  );
}

export default App;
