import React from 'react'
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n'
import { Flex } from '@wordpress/components';

import { useState } from '@wordpress/element';
import { ConfigurationSetting } from '../components/settings';
// 
const Settings = () => {
    // const [authMethod, setAuthMethod] = useState(awsAuthenticationMethods[0].id);

    const settings = useSelect(
        (select) => {
            return select('my-shop').getSettings();
        },
        []
    );

    const handleSave = () => {
    };

    const { setSettings } = useDispatch('my-shop');

    return (

        <Flex
            direction='column'
            justify='center'
            align='center'
        >
            <ConfigurationSetting />
        </Flex>
    )
}

export default Settings