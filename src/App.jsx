import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => setActress(resp.data))
  }

  useEffect(() => (fetchActress()), []);

  return (
    <>
      <div className="container">
        <div className="row">
          {actress.map((act) => (
            <div className="col-12">
              <div className="card d-flex flex-row">
                <div className="card-img">
                  <img src={act.image} alt="" />
                </div>
                <div className="card-body ">
                  <div className="name mb-3">{act.name}</div>
                  <div className="data mb-3">{act.birth_year}</div>
                  <div className="nation mb-3">{act.nationality}</div>
                  <div className="bio mb-3">{act.biography}</div>
                  <div className="awards">{act.awards}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
