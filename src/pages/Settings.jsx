import React from 'react'
import { __ } from '@wordpress/i18n'
import { awsAuthenticationMethods } from '../utils/awsAuthenticationMethods';
import { Button, Dropdown } from '../components';
import { useState } from '@wordpress/element';

const Settings = () => {

    const [authMethod, setAuthMethod] = useState(awsAuthenticationMethods[0].id);

    return (
        <div
            className='
                flex
                flex-col
                gap-5
            '>
            <div className='flex gap-2'>
                <div className='
                    flex
                    flex-col
                    justify-center
                    gap-2
                '>
                    <h1>{__('Authentication and Access Settings', 'wp-aws-mli')}</h1>
                    <label
                        for='countries'
                        className='
                            block
                            mb-2
                            text-sm
                            font-medium
                            text-gray-900
                            dark:text-gray-400
                        '>
                        {__('Select an authentication method', 'wp-aws-mli')}
                    </label>
                    <Dropdown
                        options={awsAuthenticationMethods}
                        intialValue='Select Authentication Type'
                        onChange={setAuthMethod}
                        value={authMethod}
                    />
                </div>
                {authMethod === 'access_key' &&
                    <div className='
                        flex
                        flex-col
                        gap-2
                    '>
                        <label
                            for='access_key'
                            className='
                                block
                                mb-2
                                text-sm
                                font-medium
                                text-gray-900
                                dark:text-gray-400'
                        >
                            {__('Access Key ID', 'wp-aws-mli')}
                            <input
                                type='password'
                                name='access_key'
                                className='
                                    mt-1
                                    block
                                    w-full
                                    p-2
                                    border
                                    border-red-300
                                    rounded-mdshadow-sm
                                    focus:border-indigo-300
                                    focus:ring
                                    focus:ring-indigo-200
                                    focus:ring-opacity-50
                            '/>
                        </label>

                        <label for="access_key" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                            {__('Secret Access Key', 'wp-aws-mli')}
                            <input type='password' name='access_key' className='block' />
                        </label>
                    </div>
                }
            </div>
            <Button />
        </div>
    )
}

export default Settings