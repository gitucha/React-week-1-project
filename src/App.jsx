import Movies from "./Components/movies"
import Cars from "./Components/Cars"



function App() {

  return (
    <>
      <div class = "flex items-center gap-8" >

        <div class=" bg-emerald-700  rounded-lg border-2 p-2 m-5" >
          <Movies />
        </div>
        <div class=" bg-emerald-700 rounded-lg border-2 p-2 m-5"  >
         <Cars />
        </div>

      </div>

    </>
  )
}

export default App
