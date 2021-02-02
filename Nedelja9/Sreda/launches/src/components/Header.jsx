import { useState } from 'react'
import { useEffect } from 'react'
import { getCompanyInfo } from '../services'

const Header = () => {
    
    const [companyName, setCompanyName] = useState('')

    useEffect(() => {
        getCompanyInfo().then(res => {
            setCompanyName(res.data.name)
        })
    }, [])

    return (
       <>
           <h1>{companyName}</h1>
       </>
    )
}

export default Header