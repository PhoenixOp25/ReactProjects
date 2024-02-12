import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor:color}}
      >
        <div className="fixed justify-centre bottom-12 inset-x-0 px-2 flex flex-wrap" >
          <div className="flex flex-wrap justify-centre gap-3 bg-white shadow-lg px-3 rounded-3xl " >
            <button
            onClick={()=>setColor("Red")}
            className="outline-none px-4 py-1
            rounded-full test-white shadow-lg"
            style={{backgroundColor:"red"}}>
            Red
            </button>
            <button
            
            onClick={()=>setColor("#f06292")}
            className="outline-none px-4 py-1
            rounded-full test-white shadow-lg"
            style={{backgroundColor:"Pink"}}>
            Pink
            </button>
            <button
            onClick={()=>setColor("Green")}
            className="outline-none px-4 py-1
            rounded-full test-white shadow-lg"
            style={{backgroundColor:"green"}}>
            Greeen
            </button>
            <button
            onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1
            rounded-full test-white shadow-lg"
            style={{backgroundColor:"blue"}}>
            blue
            </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
