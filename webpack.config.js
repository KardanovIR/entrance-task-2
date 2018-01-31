'use strict';

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');


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
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8080,
		historyApiFallback: true
	}
};