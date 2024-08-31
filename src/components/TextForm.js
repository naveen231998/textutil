import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=> {
        console.log("Upper Case was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowClick = ()=> {
        console.log("Lower Case was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }

    const CopyToClipboard = ()=> {
        console.log("Text Copied");
        let newText = document.getElementById("MyBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        setbtnname("Copied")
    }   
    const handlecapClick = ()=> {
        console.log("Capitalise Case was clicked")
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
    }



    const handleOnChange = (event)=> {
        console.log("On Change");
        setText(event.target.value);
        setbtnname("Copy Text")
    }

    const textcounter = ()=> {
        console.log("Count of text");
        if (text.charAt(text.length-1) === ' '){
           return text.split(" ").length - 1;
        }
        else {
            if (text.length === 0){
                return 0
            }
            else {
            return text.split(" ").length
            }
        }
    }

    // const [text, setText] = useState("Enter your Text");
    const [text, setText] = useState("");
    const [btnname, setbtnname] = useState("Copy Text");
    // setText("New Text");
    return (
        <>
        <div className="container">
            <h1> {props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder='Enter Your Text' onChange={handleOnChange} style = {{backgroundColor: props.mode==='light'?'grey':'white'}} id="MyBox" rows="8"></textarea>
            </div>
            <button className="btm btm primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btm btm primary mx-1" onClick={handlelowClick}>Convert To Lowercase</button>
            <button className="btm btm primary mx-1" onClick={handlecapClick}>Convert To Capitalize</button>
            <button className="btm btm primary mx-1" onClick={CopyToClipboard}>{btnname}</button>
        </div>
        <div className="container my-3">
            <h1>Your text Summary</h1>
            {/* <p> {text.split(" ").length} words {text.length} Characters </p> */}
            <p> {textcounter()} words {text.length} Characters </p>

            <p> {text.match(/\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z|A-Z]{2,}\b/)} Email </p>
            <p> {(0.008 * text.split(" ").length).toFixed(2)} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
