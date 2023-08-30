import '@/styles/globals.scss'
import React from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Dashboard from './components/dashboard';


export default function App({ Component, pageProps }) {
  return (
    <div className="">
      <Header />
      <div className='flex'>
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </div>
  )
}
