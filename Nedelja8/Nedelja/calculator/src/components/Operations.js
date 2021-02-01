import Button from './Button'

const Operations = ({ setOperacije, noviBr, setRezultat, setKorak,setNoviBr}) =>{
    let operacije = ['+', '-', '/','*', 'clear']
    return (
        <>
        {operacije.map(operacija => <Button key={operacija} setOperacije={setOperacije} value={operacija} noviBr={noviBr} setNoviBr={setNoviBr} setRezultat={setRezultat} setKorak={setKorak}  />)}
        </>
    )
}
export default Operations