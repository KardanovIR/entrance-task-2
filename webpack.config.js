'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

function _path(p) {
	return path.join(__dirname, p);
}


module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		index: './js/index.js',
		add: './js/add.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								autoprefixer({
									browsers: ['ie >= 8', 'last 2 version']
								})
							],
							sourceMap: true
						}
					}
				],
			},
			{
				test: /(\.jpg|\.png|\.eot|\.woff2|\.woff|\.ttf|\.svg)/,
				loader: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]'
					}
				}]
			}
		]
	},
	resolve: {
		alias: {
			'jquery': _path('node_modules/jquery/dist/jquery'),
			'inputmask.dependencyLib': _path('node_modules/jquery.inputmask/dist/inputmask/inputmask.dependencyLib'),
			'inputmask' : _path('node_modules/jquery.inputmask/dist/inputmask/inputmask'),
			'jquery.inputmask': _path('node_modules/jquery.inputmask/dist/inputmask/jquery.inputmask'),
			'inputmask.date.extensions': _path('node_modules/jquery.inputmask/dist/inputmask/inputmask.date.extensions')
		},
	},
	
	devtool: 'source-map',
	devServer: {
		contentBase: __dirname,
		port: 8080,
		historyApiFallback: true
	}
};