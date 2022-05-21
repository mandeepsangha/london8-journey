import React, { useState } from "react";
function Form() {
  const [moduleName, setModuleName] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  function handleUsername(event) {
    setUserName(event.target.value);
  }
  function handleMessage(event) {
    setMessage(event.target.value);
  }
  function handleModule(event) {
    setModuleName(event.target.value);
  }
  async function handleClick() {
    const newMessage = { moduleName, userName, message };
    const url = "https://ldn8-journey-server.glitch.me/";
    console.log("hello");
    const data = await fetch(url, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(newMessage),
    });
  }

  return (
    <div className="theForm">
      <div className="form-container"></div>
      <select value={moduleName} onChange={handleModule} className="select">
        <option>Select Module</option>
        <option value="htmlcss">HTML/CSS</option>
        <option value="javascript">JAVASCRIPT</option>
        <option value="react">REACT</option>
        <option value="node">NODE</option>
        <option value="sql">SQL</option>
      </select>
      <input
        type="text"
        value={userName}
        onChange={handleUsername}
        className="name"
        placeholder="Your Name"
      ></input>
      <input
        type="text"
        value={message}
        onChange={handleMessage}
        className="experience"
        placeholder="Your Experience"
      ></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default Form;
