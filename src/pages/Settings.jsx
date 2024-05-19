import React from 'react'
import { __ } from '@wordpress/i18n'
import { awsAuthenticationMethods } from '../utils/awsAuthenticationMethods';
import { Button, Dropdown, FormInput } from '../components';
import { useState } from '@wordpress/element';

const Settings = () => {

    const [authMethod, setAuthMethod] = useState(awsAuthenticationMethods[0].id);

    const handleSave = () => {

        console.log('saving settings');

    };

    return (
        <div
            className='
                flex
                flex-col
                gap-5
                w-full
                px-5 !rounded-10
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
                            text-sm
                            font-medium
                            text-gray-600
                        '>
                        {__('Select an authentication method', 'wp-aws-mli')}
                    </label>
                    <Dropdown
                        options={awsAuthenticationMethods}
                        intialValue='Select Authentication Type'
                        onChange={setAuthMethod}
                        value={authMethod}
                    />
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
            </div>
            <Button onClick={handleSave} />
        </div>
    )
}

export default Settings