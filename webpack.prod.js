const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const path = require("path");

const prod = {
	mode: "production",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	}
};

module.exports = merge(prod, common);
