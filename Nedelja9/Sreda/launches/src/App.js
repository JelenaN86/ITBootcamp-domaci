import { useEffect } from 'react'
import { useState } from 'react'
import { getAllLaunches } from "./services"
import Header from './components/Header'
import LaunchList from './components/LaunchList'
import Select from './components/Select'

const App = () => {

  const [launches, setLaunches] = useState([])
  const [year, setYear] = useState('')

  useEffect(() => {
    getAllLaunches().then(res => {
        setLaunches(res.data)
    })
  }, [])

  return (
    <>
      <Header />
      <Select launches={launches} setYear={setYear}/>
      <LaunchList launches={launches} year={year}/>
    </>
  )
}

export default App
