import axios from 'axios'
import { Router } from 'next/router'
const options = {
    creadentials: true
}
const Get = async(url,query)=> {
    try  {
        const response = await axios.get(url,{params:query},options)
        if (response.status === 200) {
            const {data: data} = response.data
            return data
        } else {
            console.log(response)
            return null
        }
    }catch(error){
        console.log("Error",error)
        return null
    }
}


export default Get