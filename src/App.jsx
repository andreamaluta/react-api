import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => console.log(resp.data.name))
  }

  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
