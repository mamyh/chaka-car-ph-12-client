import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'

const About = () => {
    return (<>
        <Header></Header>
        <div className="h-screen">
            <div className="h-1/2 bg-cover md:flex items-center justify-center text-white" style={{ backgroundImage: `url(https://pbs.twimg.com/media/DteBkdqVsAEuJ_-.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div >
                    <h1 className="text-3xl font-bold"> About Chaka</h1>
                    <div className="mt-2  text-center">
                        <Link className="bg-transparent  border-2 border-current px-4" to="/home">Home</Link>
                    </div>
                </div>
            </div>
            <div className="h-1/2 text-center pt-8 space-y-4">
                <h1 className="text-yellow-300 text-2xl">Chaka</h1>
                <h2 className="text-xl text-gray-600">ONE STOP CARE PLATFORM FOR ALL</h2>
                <p> Chaka is the fulfillment of the special needs for yunng generation . We believe that it is our duty to provide nice and stylish car  for our yungers and familly person responsibly, to treat them with dignity, and to provide them with the highest level of support  possible.</p>
            </div>
        </div >
        <Footer></Footer>
    </>
    )
}

export default About
