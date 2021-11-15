import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

const Modal = ({ setShowModal, id }) => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState({});

    useEffect(() => {
        setIsLoading(true);
        const url = `https://infinite-plains-05304.herokuapp.com/products/${id}`;
        fetch(url).then(res => res.json()).then(data => {
            setProduct(data);
            setIsLoading(false);
        })
    }, []);
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...updatedProduct };
        newProduct[field] = value;
        setUpdatedProduct(newProduct);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('sorry! for time i can  not edit it ');
    }
    // if (isLoading) {
    //     return <Spinner></Spinner>
    // }
    return (



        <>
            <form onSubmit={handleSubmit}>


                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Editing Product
                                </h3>
                                <button
                                    className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    {/* <span className=" text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span> */}
                                    X
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <p className=" space-y-2 my-4 text-blueGray-500 text-lg leading-relaxed">
                                    {!isLoading && <><input defaultValue={product.name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Product Name" onBlur={handleBlur} name="name" type="text" />
                                        <input defaultValue={product.time} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Date to build" onBlur={handleBlur} name="time" type="date" />
                                        <input defaultValue={product.rating} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Rate" onBlur={handleBlur} name="rating" type="number" />
                                        <input defaultValue={product.price} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="price" onBlur={handleBlur} name="price" type="number" />
                                        <input defaultValue={product.image} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="image link" onBlur={handleBlur} name="image" type="text" /></>}
                                    {isLoading && <Spinner></Spinner>}
                                </p>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                {/* <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Save Changes
                            </button> */}
                                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </form>
        </>


    )
}

export default Modal
