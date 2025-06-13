import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = ()=>{
       // console.log("Uppercase Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success ");
    }
    const handleLoClick = ()=>{
     // console.log("Lowercase Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
       props.showAlert("Converted to Lowercase!", "success ");

  }
  const handleClearClick = ()=>{
    // console.log("Clear Clicked" + text);
    let newText = '';
    setText(newText)
     props.showAlert("Text Cleared!", "success ");

}

    const handleCopy = () => {
      navigator.clipboard.writeText(text); 
      document.getSelection().removeAllRanges();
      props.showAlert("Copied to Clipboard!", "success ");
  }


  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success ");
  }
const handleSpeak = () => {
  const speech = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speech);
  props.showAlert("Text Spoked!", "success ");

};

    const handleOnChange = (event)=>{
        console.log("on changed");
        setText(event.target.value);

    }
    const [text, setText] = useState('Enter text here');

  return (
    <>
   <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2 className= 'mb-4'>{props.heading} </h2>
<div className="mb-3">

<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea></div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
