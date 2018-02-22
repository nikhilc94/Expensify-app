const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");
//console.log(__dirname);

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
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
					use: CSSExtract.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				}]
			},
			plugins: [
				CSSExtract
			],
			devtool: isProduction ? 'source-map' : 'inline-source-map',
			devServer: {
				contentBase: path.join(__dirname, "public"),
				historyApiFallback: true
			}
	}
};


