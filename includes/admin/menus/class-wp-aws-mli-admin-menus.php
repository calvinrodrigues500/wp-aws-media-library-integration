<?php
/**
 * @package WP Media Library AWS Integration
 */

namespace WPAWSMLI\Admin;

defined('ABSPATH') || exit;

class WP_AWS_MLI_Admin_Menus {
	
	/**
	 * WP_AWS_MLI_Admin_Menus constructor
	 */
	public function __construct()
	{
		add_action('admin_menu', array( $this, 'wp_aws_mli_admin_menu' ) );
	}

	/**
	 * Plugin Menu
	 */
	public function wp_aws_mli_admin_menu()
	{
		add_menu_page(
			__('Media Library AWS', 'wp-aws-mli'),
			__('Media Library AWS', 'wp-aws-mli'),
			'manage_options',
			'wp_aws_mli_admin_menu',
			[$this, 'wp_aws_mli_admin_page'],
			'dashicons-clipboard',
			56
		);
	}

	/**
	 * Plugin Menu
	 */
	public function wp_aws_mli_admin_page()
	{
		include_once WP_AWS_MLI_PLUGIN_DIR_PATH . 'includes/admin/views/html-wp-aws-mli-admin-page.php';
	}
}
new WP_AWS_MLI_Admin_Menus();