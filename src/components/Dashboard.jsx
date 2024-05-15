import React from 'react';
import { __ } from '@wordpress/i18n';
import Settings from '../pages/Settings';

const Dashboard = () => {
  return (
	<div className='bg-white p-5 !rounded-10'>
    { __( 'Dashboard', 'wp-aws-mli') }
    <Settings />
  </div>
  )
}

export default Dashboard