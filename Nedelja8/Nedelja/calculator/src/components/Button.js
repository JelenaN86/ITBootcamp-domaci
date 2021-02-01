const Button = ({value, setOperacije, noviBr, setRezultat, setKorak, setNoviBr}) =>{

    return(
        <>
        <button onClick={() =>{
            setNoviBr('')
            value === 'clear' ? setKorak('0') : setKorak(prev => prev + value + noviBr)
            setOperacije(value)
            switch (value) {
                case '+': setRezultat(prev => Number(prev) + Number(noviBr)); break
                case '-': setRezultat(prev => Number(prev) - Number(noviBr)); break
                case '/': setRezultat(prev => Number(prev) / Number(noviBr)); break
                case '*': setRezultat(prev => Number(prev) * Number(noviBr)); break
                case 'clear': setRezultat('0'); break
                default: setRezultat('Not valid'); break
            }
        }}>{value}</button>
        </>
    )
}
export default Button