const path = require('path');
const fileSystem = require('fs-extra');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ZipPlugin = require('zip-webpack-plugin');

/**
 * Retrieves info about the Foundry installed in the system in JSON format.
 * @returns JSON with Foundry configuration data.
 */
function getFoundryConfig() {
    const filePath = path.resolve(process.cwd(), 'foundryconfig.json');
    let config;

    if (fileSystem.existsSync(filePath)) {
        config = fileSystem.readJSONSync(filePath);
    } else {
        console.log('Unable to locate configuration file at path.');
    }

    return config;
}

module.exports = (env, argv) => {
    let config = {
        context: __dirname,
        entry: path.resolve(__dirname, "./src/module/fabulaultima.mjs"),
        module: {
            rules: [
                {
                    test: /\.(c|sa|sc)ss$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ],
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
            new MiniCssExtractPlugin({
                filename: "fabulaultima.css"
            }),
            new CopyPlugin({
                patterns: [
                    { from: "system.json" },
                    { from: "template.json" },
                    { from: "lang", to: "lang" },
                    { from: "src/templates", to: "templates" },
                    { from: "src/styles", to: "styles" },
                ]
            }),
            new ZipPlugin({
                    path: '..',
                    filename: 'fabulaultima.zip',
                },
            )
        ],
        output: {
            filename: "fabulaultima.bundle.mjs",
            path: path.resolve(__dirname, "dist/fabulaultima"),
        },
    };

    const isProduction = argv.mode === 'production';
    const foundryConfig = getFoundryConfig();

    if (isProduction) {
        config.mode = "production";
    } else {
        console.log(`Dev build detected.`);

        if (foundryConfig !== undefined) {
            config.output.path = path.join(foundryConfig.data_folder, 'systems', 'fabulaultima');
        }

        //config.devtool = "inline-source-map";
        config.watch = true;
        config.mode = "none";
    }

    console.log(`Generating files at: ${config.output.path}`);

    return config;
};