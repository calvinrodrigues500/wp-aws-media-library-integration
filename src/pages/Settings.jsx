import React from 'react'
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n'
import { Panel, PanelBody, PanelRow, Button, Flex, FlexItem, TextControl, Dropdown, MenuGroup, MenuItem } from '@wordpress/components';
import {
    __experimentalText as Text,
    TextInput,
    __experimentalVStack as VStack
} from '@wordpress/components';
import { useState } from '@wordpress/element';


// import { awsAuthenticationMethods } from '../utils/awsAuthenticationMethods';
// import { Dropdown, FormInput } from '../components';
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

    console.log('--------- ', settings);

    const dorpVal = ['hi', 'hel', 'dd'];


    return (
        <Panel
            header={__('WP AWS Media Library Integration')}
        >
            <PanelBody
                title={__('AWS Configuration', 'wp-aws-mli')}
                initialOpen={true}
            >
                <PanelRow>
                    <Flex
                        justify='space-between'
                    >
                        <FlexItem>
                            <Text
                                size='15'
                                fontWeight='bold'
                            >
                                {__('Select an authentication method', 'wp-aws-mli')}
                            </Text>
                            <Dropdown
                                popoverProps={ { placement: 'bottom-start' } }
                                renderToggle={ ( { isOpen, onToggle, onClose } ) => (
                                <Button
                                    variant="primary"
                                    onClick={ onToggle }
                                    aria-expanded={ isOpen }
                                >
                                    Toggle Dropdown!
                                </Button>
                                ) }
                                renderContent={ () => (
                                    <MenuGroup
                                        onClick={onclose}
                                    >
                                    <MenuItem>
                                        Menu Item 1
                                    </MenuItem>
                                    <MenuItem>
                                        Menu Item 2
                                    </MenuItem>
                                    </MenuGroup>
                                ) }
                            />
                        </FlexItem>

                        <VStack>
                            <TextControl
                                type='password'
                                value={settings.access_key_id}
                                label={__('Access Key ID', 'wp-aws-mli')}
                                onChange={ (value) => {
                                    setSettings({...settings, access_key_id: value})
                                }}
                            />
                            <TextControl
                                type='password'
                                value={settings.secret_access_key}
                                label={__('Secret Access Key', 'wp-aws-mli')}
                                onChange={ (value) => 
                                    setSettings({...settings, secret_access_key: value})
                                }
                            />
                        </VStack>
                    </Flex>
                </PanelRow>
                <Button
                    variant='primary'
                    onClick={handleSave}
                >
                    {__('Save', 'wp-aws-mli')}
                </Button>
            </PanelBody>
        </Panel>
    )
}

export default Settings