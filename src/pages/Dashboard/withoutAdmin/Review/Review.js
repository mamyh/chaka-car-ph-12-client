
import React, { useState } from 'react'
import useAuth from '../../../../hooks/useAuth';
import Alert from '../../../shared/Alert/Alert';

const Review = () => {
    const { user, } = useAuth();
    const [reviwer, setReviwer] = useState({ email: user.email, name: user.displayName });
    const [isSuccess, setIsSuccess] = useState(false);
    const handleBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviwer = { ...reviwer };
        newReviwer[field] = value;
        setReviwer(newReviwer);
    }
    const handleSubmit = (e) => {
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviwer),
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                setReviwer({});
                setIsSuccess(true);
            }
        })
    }
    return (
        <div className="w-3/4 ml-auto">
            <form onSubmit={handleSubmit} className="space-y-4 w-1/3 my-8">
                <input defaultValue={user.displayName} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" disabled />
                <input defaultValue={user.email} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" disabled />
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder="Rate" onBlur={handleBlur} name="rating" type="number" />
                <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" onBlur={handleBlur} name="review"></textarea>

                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                    Review
                </button>
            </form>
            {isSuccess && <Alert message={'Your review is inserted successfully'} type="success"></Alert>}
        </div>
    )
}

export default Review;
