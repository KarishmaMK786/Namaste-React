import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
            <h1>Oops!!</h1>
            <p>unknown page</p>
            <h3>{err.status}, {err.statusText}</h3>
        </>
    )
}

export default Error;