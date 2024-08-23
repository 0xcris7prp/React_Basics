import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEmoji(emojipedia) {
  return (
    <Entry 
    key = {emojipedia.id}
    emoji = {emojipedia.emoji}
    name = {emojipedia.name}
    meaning = {emojipedia.meaning}
    />
  );

}

function App() {
  return (
    <div> 
    <h1><span>emojipedia</span></h1>
    {emojipedia.map(createEmoji)}
    </div>

   
    
  );
}

export default App;
