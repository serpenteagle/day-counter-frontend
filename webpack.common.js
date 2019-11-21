const path = require("path");

module.exports = {
	entry: path.join(__dirname, "src/main.js"),
	module: {
		rules: [
			{ test: /\.js$/, use: "babel-loader" },
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ["file-loader"]
			}
			// ,
			// {
			// 	test: /\.svg$/,
			// 	loader: "svg-inline-loader"
			// }
		]
	}
};
