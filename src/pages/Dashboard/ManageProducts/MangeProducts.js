import React, { useEffect, useState } from 'react'

const MangeProducts = () => {

    const [products, setProducts] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/products').then(res => res.json()).then(data => {
            setProducts(data);
        })
    }, [isSuccess]);
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure ? you want to delete');
        if (confirmation) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE',

            }).then(res => res.json()).then(data => {
                if (data.deletedCount === 1) {
                    setIsSuccess(true);
                }
            })
        }
    }
    return (

        <div className="bg-white overflow-auto" className="w-3/4 ml-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>

                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        products.map(product =>

                            <tr key={product._id}>
                                <td className="w-1/3 text-left py-3 px-4">{product.name}</td>
                                <td className="w-1/3 text-left py-3 px-4">{product.price}</td>
                                <td className="text-left py-3 px-4">
                                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    )
}

export default MangeProducts
