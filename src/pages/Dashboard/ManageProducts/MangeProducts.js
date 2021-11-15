import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import Modal from '../../shared/Modal/Modal';
import Spinner from '../../shared/Spinner/Spinner';

const MangeProducts = () => {
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [editId, setEditId] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    let { path, url } = useRouteMatch();
    useEffect(() => {
        setIsLoading(true);
        fetch('https://infinite-plains-05304.herokuapp.com/products').then(res => res.json()).then(data => {
            setProducts(data);
            setIsLoading(false);
        })
    }, [isSuccess]);
    const handleEdit = (id) => {
        setEditId(id);
        setShowModal(true);
    }
    const handleDelete = (id) => {
        setIsSuccess(false);
        const confirmation = window.confirm('Are you sure ? you want to delete');
        if (confirmation) {
            setIsLoading(true);
            const url = `https://infinite-plains-05304.herokuapp.com/products/${id}`
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
                                <td className="text-left md:flex space-x-2 py-3 px-4">
                                    <Link to={`${url}/addproduct`}>Add </Link>
                                    <button onClick={() => handleEdit(product._id)}>Edit</button>

                                    <button onClick={() => handleDelete(product._id)}>Delete</button>
                                </td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
            {showModal && <Modal setShowModal={setShowModal} id={editId} ></Modal>}
        </div>

    )
}

export default MangeProducts
