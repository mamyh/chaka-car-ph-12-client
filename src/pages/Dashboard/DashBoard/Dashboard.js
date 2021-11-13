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
import AdminRoute from '../../login/Admin/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';


const Dashboard = () => {

    const { user, logout, isAdmin } = useAuth();
    let { path, url } = useRouteMatch();

    console.log('path', path, 'url', url);

    return (
        <div>
            <aside className="absolute inset-x-2 -ml-2 bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-6">
                    <Link to="/" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Home</Link>
                    {/* <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button> */}
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    {
                        user?.email && !isAdmin && <> <Link to={`${url}/myorders`} className="flex items-center  text-white py-4 pl-6 nav-item">
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
                            <Link to={`${url}/manageallorders`} className="flex items-center  text-white py-4 pl-6 nav-item">
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


            <Switch>
                <Route exact path={path}>
                    <DashboardHome></DashboardHome>
                </Route>
                <Route exact path={`${path}/pay`}>

                </Route>
                <Route exact path={`${path}/review`}>

                </Route>
                <Route exact path={`${path}/myorders`}>

                </Route>
                <AdminRoute exact path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>

            </Switch>

        </div >
    )
}

export default Dashboard
