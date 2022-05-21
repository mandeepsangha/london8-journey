import React,{useState, useEffect} from "react";


const HtmlCss = ()=>{
    const [updateData, setUpdateData] = useState({});
let dataToUse;
useEffect(()=>{
    const url = "https://ldn8-journey-server.glitch.me/";
    console.log("hello");
    fetch(url)
    .then(res => res.json())
    .then(data => setUpdateData(data))
},[updateData])

function handleData() {
        
        
    }
    return(
    <div className="htmlcss-container">
            <button onClick={handleData} >HTML/CSS</button>
            <p> {updateData[0]}</p>
        </div>
    )

}
export default HtmlCss;