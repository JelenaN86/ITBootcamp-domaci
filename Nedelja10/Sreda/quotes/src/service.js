import axios from 'axios'


export const getAllUsers = () =>  axios.get('http://localhost:3005/users')


export const saveUser = (user) =>  axios.post('http://localhost:3005/users', user)

export const getAllQuotes = () =>  axios.get('http://localhost:3005/users/quotes')


export const saveQuote = (quote) =>  axios.post('http://localhost:3005/users/quotes', quote)