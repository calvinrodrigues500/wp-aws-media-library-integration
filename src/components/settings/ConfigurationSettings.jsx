import { __ } from '@wordpress/i18n';
import { Flex, FlexItem, Panel, PanelBody, PanelRow, Button, Dropdown, MenuGroup, MenuItem } from '@wordpress/components';
import {
  __experimentalText as Text, TextControl,
  __experimentalHStack as HStack,
  __experimentalDivider as Divider
} from '@wordpress/components';
import config from '../../common/config';

const ConfigurationSettings = () => {

  const settings = {};
  return (
    <Panel className='w-2/4'>
      <PanelBody>
        <PanelRow >
          <Flex
            direction='column'
            justify='space-between'
            className='w-full'
          >
            <FlexItem>
              <HStack>
                <Text
                  size='15'
                  fontWeight='bold'
                >
                  {__('Select an authentication method', 'wp-aws-mli')}
                </Text>
                <Dropdown
                  popoverProps={{ placement: 'bottom-start' }}
                  renderToggle={({ isOpen, onToggle, onClose }) => (
                    <Button
                      variant="primary"
                      onClick={onToggle}
                      aria-expanded={isOpen}
                      className='m-2'
                    >
                      Toggle Dropdown!
                    </Button>
                  )}
                  renderContent={() => (
                    <MenuGroup
                      onClick={onclose}
                      onChange={(value) => {
                        setSettings({ ...settings, authentication_method: value })
                      }}
                    >
                      {config.awsAuthenticationMethods.map((method) => {
                        return <MenuItem key={method.id}>
                          {method.value}
                        </MenuItem>
                      })}
                    </MenuGroup>
                  )}
                />
              </HStack>
            </FlexItem>
            <FlexItem>
              <HStack>

                <FlexItem>
                  <Text>
                    {__('Authentication Method', 'wp-aws-mli')}
                  </Text>
                </FlexItem>
                <FlexItem>

                  <TextControl
                    type='password'
                    value={settings.access_key_id}
                    label={__('Access Key ID', 'wp-aws-mli')}
                  />
                  <TextControl
                    type='password'
                    value={settings.secret_access_key}
                    label={__('Secret Access Key', 'wp-aws-mli')}
                  />
                </FlexItem>
              </HStack>

            </FlexItem>
            <Divider
              margin='2'
              className='text-gray-300'
            />
            <FlexItem>
              <Button
                variant='primary'
                // onClick={handleSave}
                className='justify-end'
              >
                {__('Save', 'wp-aws-mli')}
              </Button>
            </FlexItem>
          </Flex>
        </PanelRow>
      </PanelBody>
    </Panel>
  )
}

export default ConfigurationSettings
