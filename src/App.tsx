import { useState, useEffect } from "react"
import Header from "./component/Header"
import LocationMap from "./component/LocationMap"
import DetailsCard from "./component/DetailsCard";

function App() {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [zoom, setZoom] = useState(13);

  return (
    <div className='flex flex-col m-0 p-0 w-full h-screen box-border'>
      <Header />
      <DetailsCard />
      <LocationMap position={position} zoom={zoom}/>
    </div>
  )
}

export default App
