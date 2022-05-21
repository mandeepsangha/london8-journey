import React, { useState, useEffect } from "react";

const HtmlCss = () => {
  const [updateData, setUpdateData] = useState([]);
  let [Counter, setCounter] = useState(0);
  useEffect(() => {
    const url = "https://ldn8-journey-server.glitch.me/";
    console.log("hello");
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateData(data));
  }, []);

  console.log("7");
  console.log(updateData);

  function handleData() {
    setCounter += 1;
    return <div>"DATA"</div>;
  }

  return (
    <div className="htmlcss-container">
      <button onClick={handleData}>HTML/CSS</button>
      {updateData.map((d) => (
        <div>{d.message}</div>

        // <div>{JSON.stringify(d)}</div>
      ))}
    </div>
  );
};

export default HtmlCss;
