import React from 'react';
import { __ } from '@wordpress/i18n';
import Settings from '../pages/Settings';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
	<div className='bg-white p-5 !rounded-10'>
    { __( 'Dashboard', 'wp-aws-mli') }
    <Navbar />
    <Settings />
  </div>
  )
}

export default Dashboard