import React, { useState } from 'react'
import Alert from '../../shared/Alert/Alert';

const AddProduct = () => {
    const [product, setProduct] = useState({});
    const [productError, setProductError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const handleBlur = (e) => {
        const newProduct = { ...product };
        const field = e.target.name;
        const value = e.target.value;
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleSubmit = (e) => {

        setIsSuccess(false);
        setProductError('');
        e.preventDefault();
        if (Object.keys(product).length === 0 && product.constructor === Object) {
            setProductError('Products information should be fulfilled!');
            return;
        }

        fetch('https://infinite-plains-05304.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                setIsSuccess(true);
                setProduct({});

            }
        });
    }
    return (
        <div className="w-3/4 ml-auto">
            <h1>Add a new Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-1/3 my-8">
                <input defaultValue={product.name} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Product Name" onBlur={handleBlur} name="name" type="text" />
                <input defaultValue={product.time} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Date to build" onBlur={handleBlur} name="time" type="date" />
                <input defaultValue={product.rating} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Rate" onBlur={handleBlur} name="rating" type="number" />
                <input defaultValue={product.price} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="price" onBlur={handleBlur} name="price" type="number" />
                <input defaultValue={product.image} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="image link" onBlur={handleBlur} name="image" type="text" />

                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Add
                </button>
            </form>
            {productError && <Alert message={productError} type="danger"></Alert>}
            {isSuccess && <Alert message={'Your product is inserted successfully'} type="success"></Alert>}
        </div>
    )
}

export default AddProduct;
