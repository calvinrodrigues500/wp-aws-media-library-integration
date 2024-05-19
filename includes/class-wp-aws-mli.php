<?php
/**
 * WP AWS MLI main class
 *
 * @package WP Media Library AWS Intgeration
 */

defined( 'ABSPATH' ) || exit;

/**
 * WP_AWS_MLI main class
 */
class WP_AWS_MLI {

	/**
	 * Instance of the class
	 *
	 * @var WP_AWS_MLI
	 * @since 1.0.0
	 */
	protected static $_instance;

	/**
	 * WP_AWS_MLI constructor
	 */
	public function __construct() {}

	/**
	 * Initialize the instance of the class
	 */
	public static function instance() {

		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Initialize required hooks
	 */
	public static function init() {

		self::instance();

		// Plugin Scripts.
		add_action( 'admin_enqueue_scripts', array( self::$_instance, 'mli_intialize_plugin_scripts' ) );

		// Plugin Files.
		add_action( 'init', array( self::$_instance, 'mli_include_plugin_files' ) );
	}

	/**
	 * Initialize scripts required for the plugin
	 */
	public function mli_intialize_plugin_scripts() {

		wp_enqueue_style(
			'wp-aws-mli-style',
			WP_AWS_MLI_PLUGIN_DIR_URL . 'build/index.css',
			array( 'wp-components'),
			WP_AWS_MLI_PLUGIN_VERSION
		);

		wp_enqueue_script(
			'wp-aws-mli-script',
			WP_AWS_MLI_PLUGIN_DIR_URL . 'build/index.js',
			array( 'wp-element', 'wp-components' ),
			WP_AWS_MLI_PLUGIN_VERSION,
			true
		);
	}

	/**
	 * Include required files
	 */
	public function mli_include_plugin_files() {

		include_once WP_AWS_MLI_PLUGIN_DIR_PATH . 'includes/admin/menus/class-wp-aws-mli-admin-menus.php';
	}
}
