import React, { useEffect, useState } from 'react'
import Spinner from '../../shared/Spinner/Spinner';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {

        setIsLoading(true);
        fetch('https://infinite-plains-05304.herokuapp.com/orders').then(res => res.json()).then(data => {


            setOrders(data);
            setIsLoading(false);
        })
    }, [isSuccess]);
    const handleApproved = (id) => {
        setIsSuccess(false);
        setIsLoading(true);
        fetch(`https://infinite-plains-05304.herokuapp.com/orders/${id}`, {
            method: 'PUT'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount === 1) {
                setIsSuccess(true);
            }
            setIsLoading(false);
        })
    }
    const handleDelete = (id) => {
        setIsSuccess(false);
        const confirmation = window.confirm('Are you sure ? you want to delete');
        if (confirmation) {
            setIsLoading(true);
            const url = `https://infinite-plains-05304.herokuapp.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',

            }).then(res => res.json()).then(data => {
                if (data.deletedCount === 1) {
                    setIsSuccess(true);
                }
                setIsLoading(false);
            })
        }
    }
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (

        <div className="bg-white overflow-auto" className="w-3/4 ml-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Price</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">status</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>

                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        orders.map(order =>

                            <tr key={order._id}>
                                <td className="w-1/3 text-left py-3 px-4">{order.email}</td>
                                <td className="w-1/3 text-left py-3 px-4">{order.name}</td>
                                <td className="w-1/3 text-left py-3 px-4">${order.price}</td>
                                <td className="w-1/3 text-left py-3 px-4">{order.status}</td>
                                <td className="text-left md:flex space-x-1 py-3 px-4">
                                    <button onClick={() => handleApproved(order._id)}>approved</button>
                                    <button onClick={() => handleDelete(order._id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>

    )
}
export default ManageOrders
