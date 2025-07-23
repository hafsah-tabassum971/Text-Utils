import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  // ---- Text Manipulation Handlers ----
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert(" Converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert(" Converted to Lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert(" Text Cleared!", "success");
  };

  const handleSpeak = () => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
    props.showAlert(" Text Spoke!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert(" Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert(" Extra spaces removed!", "success");
  };

  const handleFindReplace = () => {
    const toReplace = prompt("Enter the word to replace:");
    const replaceWith = prompt("Enter the replacement:");
    if (toReplace && replaceWith) {
      setText(text.replaceAll(toReplace, replaceWith));
      props.showAlert(` Replaced "${toReplace}"`, "success");
    }
  };

  const handleTitleCase = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert(" Converted to Title Case!", "success");
  };

  const handleSentenceCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    setText(newText);
    props.showAlert(" Converted to Sentence Case!", "success");
  };

  const handleRemoveLineBreaks = () => {
    setText(text.replace(/\n+/g, " "));
    props.showAlert(" Line breaks removed!", "success");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "textutils-output.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert(" File Downloaded!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // ---- Text Stats ----
  const wordsArray = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  const wordCount = wordsArray.length;
  const charCount = text.length;
  const readingTime = (wordCount * 0.008).toFixed(2);
  const avgWordLength =
    wordCount > 0
      ? (
          wordsArray.reduce((acc, word) => acc + word.length, 0) / wordCount
        ).toFixed(2)
      : 0;

  return (
    <>
      <div
        className="w-100"
        style={{
          backgroundColor: props.mode === "dark" ? "#0b2536" : "#f8f9fa",
          color: props.mode === "dark" ? "#f0f8ff" : "#27435aff",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <h2 className="mb-4">{props.heading}</h2>

        <textarea
          className="form-control mb-4 w-100"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#1a344a" : "#ffffff",
            color: props.mode === "dark" ? "#f0f8ff" : "#27435aff",
            borderRadius: "10px",
            padding: "15px",
          }}
          rows="10"
        ></textarea>

        <div className="d-flex flex-wrap gap-2 mb-3">
          <button disabled={!text} className="btn btn-primary" onClick={handleUpClick}>
            Uppercase
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleLoClick}>
            Lowercase
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleClearClick}>
            Clear
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleSpeak}>
            Speak
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleCopy}>
            Copy
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleFindReplace}>
            Find & Replace
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleTitleCase}>
            Title Case
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleSentenceCase}>
            Sentence Case
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleExtraSpaces}>
            Remove Spaces
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleRemoveLineBreaks}>
            Remove Line Breaks
          </button>
          <button disabled={!text} className="btn btn-primary" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>

      <div
        className="px-4 py-4 mt-4 w-100"
        style={{
          backgroundColor: props.mode === "dark" ? "#1a344a" : "#f8f9fa",
          color: props.mode === "dark" ? "#f0f8ff" : "#27435aff",
          borderRadius: "10px",
        }}
      >
        <h3>Your Text Summary</h3>
        <ul className="list-unstyled">
          <li>
            <strong>Words:</strong> {wordCount}
          </li>
          <li>
            <strong>Characters:</strong> {charCount}
          </li>
          <li>
            <strong>Average Word Length:</strong> {avgWordLength} characters
          </li>
          <li>
            <strong>Estimated Reading Time:</strong> {readingTime} min
          </li>
        </ul>
      </div>
    </>
  );
}
