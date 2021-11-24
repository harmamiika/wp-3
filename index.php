<?php

/**
 * Plugin Name: Joulukalenteri
 * Description: Joulukalenteri :)
 * Version 1.0
 * Author: Miika
 * Author URI: 
 */

 if ( ! defined( 'ABSPATH' ) ) exit;

 class ChristmasCalendar {
     function __construct() {
         add_action('init', array($this, 'adminAssets'));
     }

     function adminAssets() {
        wp_register_style('calendareditcss', plugin_dir_url(__FILE__) . 'build/index.css');
        wp_register_script('joulukalenteri', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
        register_block_type('ourplugin/joulukalenteri', array(
            'editor_script' => 'joulukalenteri',
            'editor_style' => 'calendareditcss',
            'render_callback' => array($this, 'theHTML')
        ));
     }

     function theHTML($attributes) {
        if (!is_admin()) {
            wp_enqueue_script('calendarFrontend', plugin_dir_url(__FILE__) . 'build/Calendar.js', array('wp-element'));
            wp_enqueue_style('calendarFrontendStyles', plugin_dir_url(__FILE__) . 'build/Calendar.css');
        }

        ob_start(); ?>
        <div class="joulukalenteri-root"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
        <?php return ob_get_clean();
     }
 }

 $christmasCalendar = new ChristmasCalendar();