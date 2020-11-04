import React, { useEffect } from 'react'

const Home = (props) => {
    useEffect(() => {
        console.log(props);
    })
    return (
        <div>
            home
        </div>
    )
}

export default Home