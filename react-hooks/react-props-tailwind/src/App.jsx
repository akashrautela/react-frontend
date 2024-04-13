import './App.css'
import Card from './components/Card'

function App() {
  
  let myObj = {
    role: "Full stack web developer",
    location: "India"
  }

  return (
    <>
      <h1 className='bg-green-500 text-white px-4 rounded-xl mb-2'>My Views on Tailwind</h1>
      <Card name = "Akash" someObj = {myObj}/>
      <Card name = "Sky" someObj = {myObj}/>
      <Card name = "Rots" someObj = {myObj}/>
    </>
  )
}

export default App
