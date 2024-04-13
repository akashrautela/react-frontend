import { useState, useCallback, useEffect, useRef } from "react"


function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890";
    if(characterAllowed) str += "~`!@#$%^&*()_+=}]{[:;'<,>.?/|"

    for (let i = 1; i <= length; i++){
      let randomCharIndex = Math.floor(Math.random()*str.length);
      pass += str.charAt(randomCharIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  
  useEffect(()=>{
    passwordGenerator()
  }, [length,numberAllowed,characterAllowed])


  //useRef hook
  const passwordRef = useRef(null);
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (

    <div className="w-full max-w-fit mx-auto shadow-md rounded-lg my-8 px-4 py-3 text-orange-500 bg-gray-700">
    <h1 className="text-4xl text-center text-white my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref = {passwordRef}
          />
          <button
        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        onClick={copyPasswordToClipboard}
        >copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min = {6}
            max = {100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value) }
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {numberAllowed}
            id = "numberInput"
            onChange={()=>{
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers in password?</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked = {characterAllowed}
            id = "characterInput"
            onChange={()=>{
              setCharacterAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="characterInput">Special chars in password?</label>
          </div>

        </div>

    </div>

  )
}

export default App
