import React from 'react'

import useAuth from '../../../hooks/useAuth';
import "./Dashboard.css";
import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';


const Dashboard = () => {

    const { user, logout, isAdmin } = useAuth();
    let { path, url } = useRouteMatch();

    console.log('path', path, 'url', url);

    return (
        <div>
            <aside className="absolute inset-x-2 -ml-2 bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-6">
                    <Link to="/" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</Link>
                    {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button> */}
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    {
                        user?.email && !isAdmin && <> <Link to={`${url}/myorders`} className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            My Orders
                        </Link>
                            <Link to={`${url}/review`} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                                <i className="fas fa-sticky-note mr-3"></i>
                                Review
                            </Link>
                            <Link to={`${url}/pay`} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                                <i className="fas fa-sticky-note mr-3"></i>
                                Pay
                            </Link></>
                    }
                    {
                        user.email && isAdmin && (<>
                            <Link to={`${url}/manageallorders`} className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                                <i className="fas fa-tachometer-alt mr-3"></i>
                                Manage All Orders
                            </Link>
                            <Link to={`${url}/makeadmin`} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                                <i className="fas fa-sticky-note mr-3"></i>
                                Make Admin
                            </Link>
                            <Link to={`${url}/addproduct`} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                                <i className="fas fa-sticky-note mr-3"></i>
                                Add a Product
                            </Link>
                            <Link to={`${url}/manageproducts`} className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                                <i className="fas fa-sticky-note mr-3"></i>
                                Manage products
                            </Link>
                        </>)
                    }
                    <button className="flex w-full items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item" onClick={logout}>Logout</button>

                </nav>

            </aside>

            <div className="w-4/5 ml-auto flex flex-col h-screen overflow-y-hidden">

                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <h1 className="text-3xl text-black pb-6">Dashboard</h1>


                        <div className="w-full mt-12">

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
                        </div>
                    </main>


                </div>

            </div >
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route exact path={`${path}/pay`}>

                </Route>
                <Route exact path={`${path}/review`}>

                </Route>
                <Route exact path={`${path}/myorders`}>

                </Route>
                <Route exact path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>

            </Switch>

        </div >
    )
}

export default Dashboard
