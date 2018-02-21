const path = require("path");
//console.log(__dirname);
module.exports = {
	entry: "./src/app.js",
	output: {
//		path: "C:\Users\nikhilc94\Desktop\WebDev\React-Course\Indecision-app\public",
		path: path.join(__dirname, "public"),
		filename: "bundle.js"
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,            //checks if file ends with .js. Babel will run only then
			exclude: /node_modules/
		}, {
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true
	}
};

