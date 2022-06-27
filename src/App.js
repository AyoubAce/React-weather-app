
import './css/styles.css';
import HourlyForcast from './components/HourlyForcast';
import NavBar from "./components/NavBar";
import { WeatherProvider } from "./components/WeatherContext";
import CurrentWeather from './components/CurrentWeather';
import DailyForcast from './components/DailyForcast';
import Footer from "./components/Footer"

function App() {



  return (
    <div className="App">
      <WeatherProvider>
        <NavBar />
        <div className="weather">
        <CurrentWeather />
        <DailyForcast />
        </div>

      </WeatherProvider>
      <Footer />

    </div>
  );
}

export default App;
