const {mix} = require(`laravel-mix`);

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |  
 */

const RESOURCE_PATH = `resources/assets/custom`;
const NODE_MODULES_PATH = `node_modules`;

mix
    .scripts(
        [
            `${RESOURCE_PATH}/js/jquery-2.0.2.min.js`, // Include jquery old version
            `${RESOURCE_PATH}/js/jarvis.widget.min.js`,
            `${RESOURCE_PATH}/js/smoothscroll.js`,
            `${RESOURCE_PATH}/js/mousescroll.js`,
            `${RESOURCE_PATH}/js/jquery-ui-1.10.3.min.js`,
            `${RESOURCE_PATH}/js/HoldOn.min.js`,
            `${RESOURCE_PATH}/js/jquery.inview.min.js`,
            `${RESOURCE_PATH}/js/jquery.isotope.min.js`,
            `${RESOURCE_PATH}/js/jsUKpostcode.js`,
            `${RESOURCE_PATH}/js/main.js`,
        ], `public/js/app.js`)

    .scripts(
        [
            `${NODE_MODULES_PATH}/bootstrap/dist/js/bootstrap.js`,
            `${NODE_MODULES_PATH}/bootstrap-select/dist/js/bootstrap-select.js`,
            `${RESOURCE_PATH}/js/SmartNotification.min.js`,
            `${NODE_MODULES_PATH}/sweetalert/dist/sweetalert.min.js`,
            `${RESOURCE_PATH}/js/pace.min.js`,
            `${NODE_MODULES_PATH}/owl.carousel/dist/owl.carousel.min.js`,
            `${NODE_MODULES_PATH}/wowjs/dist/wow.min.js`,
            `${RESOURCE_PATH}/js/jquery.prettyPhoto.js`,
            `${RESOURCE_PATH}/js/datatables.bootstrap.js`,
        ], `public/js/packages.js`)

    // .sass(`resources/assets/sass/app.scss`, `public/css`)

    .styles(
        [
            `${NODE_MODULES_PATH}/bootstrap/dist/css/bootstrap.css`, // include bootstrap manually
            `${RESOURCE_PATH}/css/main.css`,
            `${RESOURCE_PATH}/css/flag-icon.css`,
            `${RESOURCE_PATH}/css/owl.transitions.css`,
            `${RESOURCE_PATH}/css/segmented-control.css`
        ], `public/css/custom.css`)

    .styles(
        [
            `${NODE_MODULES_PATH}/bootstrap/dist/css/bootstrap.min.css`,
            `${NODE_MODULES_PATH}/animate.css/animate.min.css`,
            `${NODE_MODULES_PATH}/owl.carousel/dist/assets/owl.carousel.css`,
            `${NODE_MODULES_PATH}/hover.css/css/hover.css`,
            `${NODE_MODULES_PATH}/bootstrap-select/dist/css/bootstrap-select.css`,
            `${NODE_MODULES_PATH}/sweetalert/dist/sweetalert.css`,
            `${NODE_MODULES_PATH}/sweetalert/themes/twitter/twitter.css`
        ], `public/css/vendor.css`)

    .sourceMaps();
