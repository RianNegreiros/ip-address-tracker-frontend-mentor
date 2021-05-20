import axios from 'axios'
import React, { useContext } from 'react'
import Context from '../../context/context'
import './input-styles.scss'


const Input = () => {
    const { setState } = useContext(Context)

    const getData = async (ipAddress) => {
         const apiUrl = `https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_WZoTV7gu5Z0LaEEjGpFyMIkCtP6SH&ipAddress=${ipAddress}`
         const response = await axios.get(apiUrl)
         const {ip,  isp, location } = await response.data
         setState({
             ip: ip,
             city: location.city,
             region: location.region,
             postalCode: location.postalCode,
             lat: location.lat,
             lng: location.lng,
             timezone: `UTC ${location.timezone}`,
             isp: isp
         })
     }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        getData(e.target.firstElementChild.value)
    }

    return (
        <div className="input-wrap">
            <form onSubmit={handleSubmit}>
                <input type="text"
                    id="input"
                    placeholder="Search for any IP address or domain"
                    pattern="^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$"
                />
            </form>
            <button onClick={handleSubmit}></button>
        </div>
    )
}

export default Input
