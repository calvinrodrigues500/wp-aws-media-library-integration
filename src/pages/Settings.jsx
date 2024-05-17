import React from 'react'
import { __ } from '@wordpress/i18n'
import { awsAuthenticationMethods } from '../utils/awsAuthenticationMethods';
import { Button, Dropdown, FormInput } from '../components';
import { useState } from '@wordpress/element';

const Settings = () => {

    const [authMethod, setAuthMethod] = useState(awsAuthenticationMethods[0].id);

    return (
        <div
            className='
                flex
                flex-col
                gap-5
                bg-white p-5 !rounded-10
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
                        <FormInput
                            label='Access Key ID'
                            type='password'
                            name='access_key'
                        />
                        <FormInput
                            label='Secret Access Key'
                            type='password'
                            name='secret_access_key'
                        />
                    </div>
                }
            </div>
            <Button />
        </div>
    )
}

export default Settings