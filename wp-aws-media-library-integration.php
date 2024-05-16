<?php
/**
 * Plugin Name: WP Media Library AWS Integration
 * Description: This plugin integrates AWS S3 with WordPress to manage your media files.
 * Version: 1.0.0
 * Author: Calvin Rodrigues
 * Text Domain: wp-aws-mli
 *
 * @package WP Media Library AWS Intgeration
 */

defined( 'ABSPATH' ) || exit;

// Plugin Version.
defined( 'WP_AWS_MLI_PLUGIN_VERSION' ) || define( 'WP_AWS_MLI_PLUGIN_VERSION', '1.0.0' );

// Plugin DIR Path.
defined( 'WP_AWS_MLI_PLUGIN_DIR_PATH' ) || define( 'WP_AWS_MLI_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );

// Plugin DIR URL.
defined( 'WP_AWS_MLI_PLUGIN_DIR_URL' ) || define( 'WP_AWS_MLI_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );

if ( ! class_exists( 'WP_AWS_MLI' ) ) {
	require_once WP_AWS_MLI_PLUGIN_DIR_PATH . 'includes/class-wp-aws-mli.php';
	// Initialize plugin.
	WP_AWS_MLI::init();
}
