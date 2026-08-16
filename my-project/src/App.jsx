import React, { useState } from "react";

const App = () => {

  const [text, setText] = useState("")
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col bg-black text-white">
      <div id="box">
        <h1 className="text-center text-2xl p-3">Character Counter</h1>
        <textarea className="border w-100 h-50 rounded-md" maxLength={100} value={text} onChange={(prev) => {
          setText(prev.target.value)
            setCount(prev.target.value.length);
        }}></textarea>
        <div>
            <div className="flex justify-between items-center">
              <p>Characters :  {count} / 100</p>
            <button className="border py-2 px-5 rounded mt-3"
              onClick={() => {
                setCount(0);
                setText("");
              }}
            >Clear</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
