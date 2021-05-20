import React, { useContext } from 'react'
import context from '../../context/context'
import './informations-styles.scss'

const Informations = () => {
    const { state } = useContext(context)
    return (
        <section>
            <article className="ip-address">
                <p>IP ADDRESS</p>
                <h2>{state.ip}</h2>
            </article>

            <article className="location">
                <p>LOCATION</p>
                <h2>{`${state.city}, ${state.region}, ${state.postalCode}`}</h2>
            </article>

            <article className="timezone">
                <p>TIMEZONE</p>
                <h2>{state.timezone}</h2>
            </article>

            <article className="isp">
                <p>ISP</p>
                <h2>{state.isp}</h2>
            </article>
        </section>
    )
}

export default Informations
