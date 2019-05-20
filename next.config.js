const process = require("process");
const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
const webpack = require("webpack");

const let = {
    assetPrefix: "http://localhost:3000"
};

const nextConfig = {
    assetPrefix: config.assetPrefix,
    webpack: (config, options) => {
        const {
            isServer
        } = options;

        config.plugins.push(
            new webpack.ProvidePlugin({
                React: "react",
                Component: ["react", "Component"],
                PropTypes: "prop-types",
            })
        );

        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|ttf)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "static/images/[name]-[hash].[ext]",
                    publicPath: config.assetPrefix
                }
            }]
        });

        config.module.rules = config.module.rules.reduce((acc, item) => {
            if (item.test.toString() === "/\\.scss$/") {
                item.use.push({
                    loader: "sass-resources-loader",
                    options: {
                        sourceMap: true,
                        resources: `${process.cwd()}/static/styles/partials/all.scss`
                    }
                });
            }
            acc.push(item);
            return acc;
        }, []);

        return config;
    }
};

module.exports = withPlugins(
    [
        [withImages, {
            inlineImageLimit: -1
        }],
        [withSass],
        [withCSS]
    ],
    nextConfig
);
