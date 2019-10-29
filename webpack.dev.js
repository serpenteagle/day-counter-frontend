const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

const dev = {
	mode: "development",
	output: {
	  path: path.join(__dirname, "dist"),
	  filename: "bundle.js"
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 9000,
		hot: true
	}
};

module.exports = merge(common, dev);