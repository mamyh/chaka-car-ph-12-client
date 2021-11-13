import React from 'react'

const MangeProducts = () => {
    return (

        <div className="bg-white overflow-auto">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-800 text-white">
                    <tr>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                        <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    <tr>
                        <td className="w-1/3 text-left py-3 px-4">Lian</td>
                        <td className="w-1/3 text-left py-3 px-4">Smith</td>
                        <td className="text-left py-3 px-4"><Link className="hover:text-blue-500" to="tel:622322662">622322662</Link></td>
                        <td className="text-left py-3 px-4"><Link className="hover:text-blue-500" to="mailto:jonsmith@mail.com">jonsmith@mail.com</Link></td>
                    </tr>
                    <tr className="bg-gray-200">
                        <td className="w-1/3 text-left py-3 px-4">Emma</td>
                        <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                        <td className="text-left py-3 px-4"><Link className="hover:text-blue-500" to="tel:622322662">622322662</Link></td>
                        <td className="text-left py-3 px-4"><Link className="hover:text-blue-500" to="mailto:jonsmith@mail.com">jonsmith@mail.com</Link></td>
                    </tr>

                </tbody>
            </table>
        </div>

    )
}

export default MangeProducts
