import React from 'react'
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="h-screen md:flex items-center justify-center">
            <div>
                <h1>404! page you are looking for is not found</h1>
                <div className="mt-8">
                    <Link className="px-8 bg-yellow-50" to="/">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default Notfound;
