import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from './Components/SearchBar'; // imported here, but it also needs to be rendered in the return statement of the function

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar>

      </SearchBar>
    </>
  )
}

export default App
