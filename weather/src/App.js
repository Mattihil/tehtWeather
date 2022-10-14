import './App.css';
import {useState, useEffect} from 'react'
import Weather from './components/weather';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setIsLoading(false)
      }, (error) => {
        alert(error);
      })
    }
    else {
      alert('Selaimesi ei tue paikannusta!')
    }
  }, [])
  
  if (isLoading) {
    return <p>ladataan sijaintia...</p>
  }else {
  return (
    <div>
    <p>Sijaintisi:{latitude},{longitude}</p>
    <Weather lat={latitude} lng={longitude} />
    </div>
  );
  }
}

export default App;
