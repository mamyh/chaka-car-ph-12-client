import React, { useEffect, useState } from 'react'
import Spinner from '../../shared/Spinner/Spinner';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoadin, setIsLoadin] = useState(false);
    useEffect(() => {
        setIsLoadin(true);
        fetch('https://infinite-plains-05304.herokuapp.com/reviews').then(res => res.json()).then(data => {
            const newData = data.slice(0, 3);
            setReviews(newData);
            setIsLoadin(false);
        })
    }, []);
    if (isLoadin) {
        return <Spinner></Spinner>
    }
    return (
        <>

            <div className=" md:py-16 w-full md:flex items-center justify-center ">
                <div className="md:w-5/6">
                    <h1 className="text-center text-2xl text-yellow-600 font-bold my-8 border-current border-b pb-2 inline-block">here is our client reviews</h1>
                    <div className="md:grid grid-cols-3 gap-6">
                        {reviews.map(review => (
                            <div key={review._id} className="bg-white border border-gray-200 hover:shadow-lg rounded-md mb-8">

                                <div className="flex justify-between my-8 px-4">
                                    <div className="space-y-4">
                                        <h1 className="text-xl text-gray-600 font-semibold">{review.email}</h1>
                                        <h1 className="text-2xl font-bold text-yellow-500"> {review.name}</h1>
                                        <p className="text-xl text-gray-600 font-semibold"><i className="fas fa-star"></i> {review.rating}k+Rating</p>
                                        <p className="text-xl text-gray-600 font-semibold">{review.review}</p>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Review
