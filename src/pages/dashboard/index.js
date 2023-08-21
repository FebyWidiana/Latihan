import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Dashboard from '../components/dashboard';

const Home = () => {
    return (
        <div className="">
            <Header />
            <div className='flex'>
                <Sidebar />
                <Dashboard />
            </div>
        </div>
    );
};

export default Home;
