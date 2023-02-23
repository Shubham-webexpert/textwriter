import React, { useState } from 'react'

const TextForm = () => {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLwClick = () => {
        setText(text.toLowerCase());
    }
    const handleClrClick = () => {
        setText("");
    }
    const onChangeHandle = (e) => {
        setText(e.target.value);
    }
    // console.log(text.trim().split(" "));
    return (
        <>

            <div className="mb-3 my-3">
                <label html-for="MyBox" className="form-label my-4"><h2>Enter Your Text Below:</h2></label>
                <textarea className="form-control" id="MyBox" rows="8" value={text} onChange={onChangeHandle} placeholder="Enter your text here..."></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-3" onClick={handleLwClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-3" onClick={handleClrClick}>Clear Text</button>
            <div className="container my-4">
                <h3>Your Text Summary:</h3>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{(text.length - 1 >= 0) ? 0.008 * text.split(" ").length : 0.00} Minutes to read</p>

                <h2>Text Preview:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm;
