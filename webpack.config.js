var webpack = require("webpack");
var path = require("path");
var DIST_DIR = path.resolve(__dirname, "server");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
	mode: 'development',
	devtool: 'cheap-module-source-map', 
  entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client', 
	  path.join(__dirname, 'src/app/index.js') 
  ],
	output: {
		path: path.join(__dirname, 'server'),
		filename: "bundle.js",
		publicPath: "/"
	},
	plugins: [
    new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader' , 
				exclude: /(node_modules)/,
				include: [
			    path.join(__dirname, 'src/app'),		
					SRC_DIR + 'server/shared'
				]
			},
			{
				test: /\.jsx?$/,
				use: 'react-hot-loader/webpack', 
				include: /(node_modules)/
			},
			{
				test: /\.(jpg|png)$/,
				use: {
						loader: 'url-loader',
				}
			},
			{
					test: /\.scss$/,
					loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
      {
				test: /\.css$/,
				include: [
			    path.join(__dirname)		
				],
				loaders: ['style-loader', 'css-loader']
			}
		]
 	},
	node: {
		fs: 'empty'
	}
};

