import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(emojiTerm) {
    return (
        <Entry 
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
        />
    )
}

function App() {
    return <div>
        <Header heading="emojipedia" />
            {emojipedia.map(createEntry)}
    </div>
}

export default App;