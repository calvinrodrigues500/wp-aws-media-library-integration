import React from 'react';
import { __ } from '@wordpress/i18n';
import Settings from '../pages/Settings';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <div className='
    flex
    h-screen
    bg-white
    p-2
    !rounded-10'>
      <Navbar />
      <Settings />
    </div>
  )
}

export default Dashboard