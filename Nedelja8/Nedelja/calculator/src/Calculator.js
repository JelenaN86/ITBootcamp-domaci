import { useState } from "react"
import Header from './components/Header'
import Operations from './components/Operations'


const Calculator = () => {
        const [rezultat, setRezultat] = useState(0)
        const [noviBr, setNoviBr] = useState('')
        const [korak, setKorak] = useState('')
        const [operacije, setOperacije] = useState('')
    return(
        <>
            <Header />
            <input value={rezultat} onChange={() =>  setRezultat(rezultat)}/>
            <input type="number" value={noviBr} onChange={(e) => {
                setNoviBr(e.target.value)
            }} />
            <Operations setOperacije={setOperacije} operacije={operacije} noviBr={noviBr} setRezultat={setRezultat} setKorak={setKorak} setNoviBr={setNoviBr} />
            <p>{korak}</p>
        </>
    )
}
export default Calculator