import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios"
import './App.css'
import ElementList from './components/ElementList'
import Navigation from './components/Navigation'


function App() {

  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ len, setLen ] = useState(0)

  useEffect(()=> {

    const fetchData = async ()=> {
      setLoading(true)
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setData(response.data)
        setLen(response.data.length)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  },[])

  if(loading) {
    return(
      <dir>
        Loading
      </dir>
    )
  }
  return (
    <div className='app'>
      <div>
        <Router>
            <Routes>
                <Route path='/' element={<div>
                    Home page
                </div>}></Route>
                <Route path='/:id' element={
                  <ElementList list={data}></ElementList>
                  }></Route>
            </Routes>
            <Navigation len={len}></Navigation>
        </Router>
      </div>
    </div>
  )
}

export default App
