/// <reference types="chrome"/>

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Popup: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(true);

  useEffect(() => {
    chrome.storage.sync.get(["enabled"], (result) => {
      setEnabled(result.enabled);
    });
  }, []);

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setEnabled(isChecked);
    chrome.storage.sync.set({ enabled: isChecked });
  };

  return (
    <div>
      <h1>AdSwaper</h1>
      <label>
        <input type="checkbox" checked={enabled} onChange={handleToggle} />{" "}
        Enable AdSwaper
      </label>
    </div>
  );
};

ReactDOM.render(<Popup />, document.getElementById("root"));
