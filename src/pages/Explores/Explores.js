import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
import Spinner from '../shared/Spinner/Spinner'

const Explores = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/products').then(res => res.json()).then(data => {
            setProducts(data);
            setIsLoading(false);
        });
    }, []);
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <>
            <Header></Header>
            <div className=" md:py-16 w-full md:flex items-center justify-center ">
                <div className="md:w-5/6">
                    <h1 className="text-center text-2xl text-yellow-600 font-bold my-8 border-current border-b pb-2 inline-block">here is our all Dream Cars</h1>
                    <div className="md:grid grid-cols-3 gap-6">
                        {products.map(product => (
                            <div key={product._id} className="bg-white border border-gray-200 hover:shadow-lg rounded-md mb-8">
                                <div className="w-full">
                                    <img className="w-full" src={product.image} alt="pakage " />
                                </div>
                                <div className="flex justify-between my-8 px-4">
                                    <div className="space-y-4">
                                        <h1 className="text-xl text-gray-600 font-semibold">${product.price}</h1>
                                        <h1 className="text-2xl font-bold text-yellow-500"> {product.name}</h1>
                                        <p className="text-xl text-gray-600 font-semibold"><i className="fas fa-star"></i> {product.rating}k+Rating</p>
                                    </div>

                                </div>
                                <div className="text-center mb-8">
                                    <Link className="text-xl text-white bg-yellow-600 inline-block w-1/3 p-2 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full" to={`/purchase/${product._id}`}>Purchase</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Explores
