import React from 'react'
import './input-styles.scss'


const Input = () => {

   /* const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
        console.log(inputText)
    }

    const handleSubmit = (e: any) => {
        console.log(e)
    } */

    return (
        <div className="input-wrap">
            <input type="text" 
            placeholder="Search for any IP address or domain" 
            />
            <button></button>
        </div>
    )
}

export default Input
