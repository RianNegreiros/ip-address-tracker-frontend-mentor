import React from 'react'
import './informations-styles.scss'

const Informations = () => {
    return (
        <section>
            <article className="ip-address">
                <p>IP ADDRESS</p>
                <h2>192.212.174.101</h2>
            </article>

            <article className="location">
                <p>LOCATION</p>
                <h2>Brooklyn, NY 1001</h2>
            </article>

            <article className="timezone">
                <p>TIMEZONE</p>
                <h2>UTC -05:00</h2>
            </article>

            <article className="isp">
                <p>ISP</p>
                <h2>SpaceX Starlink</h2>
            </article>
        </section>
    )
}

export default Informations
