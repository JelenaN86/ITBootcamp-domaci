onst Quote = ({quote}) => {
    return(
        <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <h4>{quote.text}</h4>
            <small>{quote.author}</small>
        </div>
    )
}

export default Quote