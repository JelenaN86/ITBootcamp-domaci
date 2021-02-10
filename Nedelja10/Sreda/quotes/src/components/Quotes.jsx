import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { getAllQuotes } from "../service"
import Quote from "./Quote"

const Quotes = ({ user }) => {
    const [quotes, setQuotes] = useState([])


    useEffect(() => {
        let mounted = true
        getAllQuotes().then(res => {
            if (mounted) setQuotes(res.data)
        })
        return () => { mounted = false }
    }, [])

    return (
        <>
            {
                user ?
                    quotes.map(quote => <Quote key={quote.id} quote={quote} />)
                    :
                    <Redirect to="/login" />
            }
        </>
    )
}
export default Quotes