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
          <div className="col-12">
            <div className="card d-flex flex-row">
              <div className="card-img">
                <p>immagine</p>
              </div>
              <div className="card-body ">
                <div className="name mb-3">Lorem</div>
                <div className="data mb-3">lorem</div>
                <div className="nation mb-3">lorem</div>
                <div className="bio mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, assumenda. At veritatis quo, voluptates a ea molestias asperiores beatae expedita impedit vero nihil commodi praesentium alias nobis est soluta accusamus?</div>
                <div className="recognition">lorem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
