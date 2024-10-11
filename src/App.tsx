import axios from 'axios';
import './App.css'
import CsvUploader from './components/csv-uploader'

function App() {

  async function handleGetFuelPrices() {
    try {
      const response = await axios.get('http://localhost:1111/fuel/prices');
      console.log( response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  return (
   <>
   <button onClick={handleGetFuelPrices}>Get fuel prices</button>
   <CsvUploader/>
   </>
  )
}

export default App
