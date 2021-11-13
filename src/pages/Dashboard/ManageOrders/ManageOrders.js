import React, { useEffect, useState } from 'react'

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/orders').then(res => res.json()).then(data => {
            setOrders(data);
        })
    }, [isSuccess]);
    const handleApproved = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount === 1) {
                setIsSuccess(true);
            }
        })
    }
    const handleDelete = (id) => {
        const confirmation = window.confirm('Are you sure ? you want to delete');
        if (confirmation) {
            const url = `http://localhost:5000/orders/${id}`
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
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">status</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>

                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {
                        orders.map(order =>

                            <tr key={order._id}>
                                <td className="w-1/3 text-left py-3 px-4">{order.name}</td>
                                <td className="w-1/3 text-left py-3 px-4">{order.price}</td>
                                <td className="w-1/3 text-left py-3 px-4">{order.status}</td>
                                <td className="text-left py-3 px-4">
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
