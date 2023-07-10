import React, { useState } from "react";
import "./styles.css";
var emojidictionary = {
  "😃": " Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "🫠": " Melting Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes"
};

export default function App() {
  const [meaning, setmeaning] = useState("");
  function emojiInputHandeler(event) {
    var userInput = event.target.value;

    var meaning = emojidictionary[userInput];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside out </h1>
      <input onChange={emojiInputHandeler}></input>
      <h2>{meaning}</h2>
    </div>
  );
}
