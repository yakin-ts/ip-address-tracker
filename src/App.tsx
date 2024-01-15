import { useState, useEffect } from "react"
import Header from "./component/Header"
import LocationMap from "./component/LocationMap"
import DetailsCard from "./component/DetailsCard";
import { getGeolocation } from "./services/api";
import { GeoData, Position } from "./types";
import './App.css'

function App() {
  const [position, setPosition] = useState<Position>({ latitude: 51.505, longitude: -0.09 });
  const [zoom, setZoom] = useState<number>(13);
  const [ipAddress, setIpAddress] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('');
  const [geoData, setGeoData] = useState<GeoData>({
    ip: '',
    location: '',
    time_zone: '',
    isp: ''
  })

  useEffect(() => {
    getGeolocation('')
      .then((res) => {
        console.log(res)
        setGeoData({
          ip: res.ip,
          location: `${res.city}, ${res.state_code} ${res.zipcode}`,
          time_zone: res.time_zone.current_time.slice(-5),
          isp: res.isp
        })
        setPosition({ latitude: Number(res.latitude), longitude: Number(res.longitude) })
        setError('')
      })
      .catch((err) => {
        setError(err.message)
      })
  }
    , [])


  const validateInput = (input: string) => {
    // IP address regex pattern
    const ipPattern = new RegExp(
      '^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
    );

    if (ipPattern.test(input)) {
      setError('');
      return true;
    } else {
      setError('Invalid IP address');
      return false;
    }
  };

  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value)
    setError('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateInput(ipAddress)) {
      return;
    }
    setLoading(true)
    getGeolocation(ipAddress)
      .then((res) => {
        console.log(res)
        setGeoData({
          ip: res.ip,
          location: `${res.city}, ${res.state_code} ${res.zipcode}`,
          time_zone: res.time_zone.current_time.slice(-5),
          isp: res.isp
        })
        setPosition({ latitude: Number(res.latitude), longitude: Number(res.longitude) })
        setZoom(13)
        setLoading(false)
        setError('')
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }
  return (
    <div className='relative h-screen w-full m-0 p-0'>
      <div className='absolute inset-0 grid grid-rows-5'>
        <div className='relative row-span-2'>
          <Header ipAddress={ipAddress} onChange={handleIpChange} onSubmit={handleSubmit} loading={loading} error={error} />
        </div>
        <div className='relative row-span-3'>
          <LocationMap position={position} zoom={zoom} />
          <DetailsCard geoData={geoData} />
        </div>
      </div>
    </div>
  )
}

export default App
