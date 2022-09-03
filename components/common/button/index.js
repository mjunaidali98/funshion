import React from 'react'

function Index({ style, text, method, type }) {
    return (
        <button onClick={() => method} type={type && type} className={`focus:outline-none bg-brand flex flex-col items-center justify-center text-white font-semibold ${style}`}>{text}</button>
    )
}

export default Index