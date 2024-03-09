//user.js 
import server from './server'
export const getUser = (value) => {
    console.log(value)
    server.get(value)
}