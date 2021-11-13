import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import useAuth from '../../hooks/useAuth';
import Alert from '../shared/Alert/Alert';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Purchases = () => {
    const [product, setProduct] = useState({});
    const { user } = useAuth();
    const { id } = useParams();
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`).then(res => res.json()).then(data => {
            setProduct(data);
        })
    }, []);
    const handleOrder = () => {
        const { _id, ...orders } = product;
        orders.email = user.email;
        orders.status = 'pending';
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                setIsSuccess(true);
            }
        })
    }
    const { image, _id, price, name, rating } = product;
    return (
        <>
            <Header></Header>
            {isSuccess && <Alert message="Orders are completed .please pay the bill in Payment section on your database" type="success"></Alert>}
            <div className="h-screen flex items-center justify-center">
                <div className="bg-white w-full md:w-3/5 hover:shadow-lg space-x-4 rounded-md md:flex">
                    <div className=" flex-none w-full md:w-1/2">
                        <img className="w-full" src={image} alt="pakage " />
                    </div>
                    <div className=" flex-auto flex justify-between my-8 pr-4 ">
                        <div className=" flex-auto space-y-4">
                            <h1 className="text-xl text-gray-600 font-semibold">${price}</h1>
                            <h1 className="text-2xl font-bold text-yellow-500"> {name}</h1>
                            <p className="text-xl text-gray-600 font-semibold"><i className="fas fa-star"></i> {rating}k+Rating</p>
                        </div>
                        <div className=" flex-none text-xl text-gray-600 font-semibold">

                            <div className="mt-8">
                                <button type="button" onClick={handleOrder} className="text-xl text-white bg-yellow-600 inline-block px-8 rounded-bl-full rounded-tl-full rounded-br-full rounded-tr-full" >Order</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
            <Footer></Footer>
        </>
    )
}

export default Purchases
