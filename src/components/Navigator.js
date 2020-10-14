import React from 'react'
import {Link} from 'react-router-dom'

const Navigator = () => {
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <>
            <Link to="/">home</Link>
            <button onClick={logout}>로그아웃</button>
        </>
    );
}

export default Navigator