import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="h-screen">
            <div className="h-1/2 bg-cover md:flex items-center justify-center text-white" style={{ backgroundImage: `url(http://www.dotage.in/wp-content/uploads/2016/10/image-3.jpg)` }}>
                <div >
                    <h1 className="text-3xl font-bold"> About Health care</h1>
                    <div className="mt-2  text-center">
                        <Link className="bg-transparent  border-2 border-current px-4" to="/home">Home</Link>
                    </div>
                </div>
            </div>
            <div className="h-1/2 text-center pt-8 space-y-4">
                <h1 className="text-yellow-300 text-2xl">Health care </h1>
                <h2 className="text-xl text-gray-600">ONE STOP CARE PLATFORM FOR ELDERS</h2>
                <p> Healthcare is the fulfillment of the special needs and requirements that are unique to senior citizens. We believe that it is our duty to care for our elders responsibly, to treat them with dignity, and to provide them with the highest level of care possible.</p>
            </div>
        </div >
    )
}

export default About
