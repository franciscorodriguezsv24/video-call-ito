const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function override(config, env) {
    config.resolve.fallback = {
        ...config.resolve.fallback,
        global: require.resolve('node-polyfill-webpack-plugin')
    };
    config.plugins = (config.plugins || []).concat([
        new NodePolyfillPlugin()
    ]);
    return config;
};