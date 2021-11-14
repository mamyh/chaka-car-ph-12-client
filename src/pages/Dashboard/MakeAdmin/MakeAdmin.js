import React, { useState } from 'react'
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth();
    const [email, setEmail] = useState(user.email);
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmail = e.target[0].value;
        setEmail(newEmail);
        const data = { creator: user.email, newAdmin: newEmail };
        console.log(data);

        fetch('https://infinite-plains-05304.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                alert('this email is admin now ');
                setEmail('');
            }
        });


    }
    return (
        <div className="w-3/4 ml-auto">
            <h1>Make an Admin</h1>
            <form onSubmit={handleSubmit}>
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 mr-4 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="email" value={email} />
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Admin</button>
            </form>
        </div>
    )
}

export default MakeAdmin
