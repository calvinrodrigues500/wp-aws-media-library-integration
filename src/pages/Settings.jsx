import React from 'react'
import { __ } from '@wordpress/i18n'
import { awsAuthenticationMethods } from '../utils/awsAuthenticationMethods';
import { Button, Dropdown } from '../components';

const Settings = () => {

	const saveSettings = () => {
		
	}

	return (
		<div
			className='flex flex-col gap-2 justify-center'
		>
			<h1>
				{__('Authentication and Access Settings', 'wp-aws-mli')}
			</h1>
			<label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select an authentication method</label>
			<Dropdown
				options={awsAuthenticationMethods}
				intialValue='Select Authentication Type'
			/>
			<Button />
		</div>
	)
}

export default Settings