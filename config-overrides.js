const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
      config,
    );

    config = rewireLess.withLoaderOptions({
      modifyVars: { "@layout-header-background": "#fff",
                    "@layout-sider-background": "#001529",
                    "@menu-dark-bg": "@layout-sider-background",
                    "@layout-header-padding": "0 30px"
                  },
      javascriptEnabled: true,
    })(config, env);

    return config;
};