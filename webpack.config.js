const webpack = require('webpack')
const resolve = require('path').resolve
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/client/entry.js',
	devtool: 'eval',
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'build/client/')
	},
	module: {
		rules: [
		{
			test: /\.sass$/,
			use: ['style-loader', 'css-loader','sass-loader'] //css-loader?url=false
		},	
		{

			test: /\.(png|jpg)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '/assets/images/[name].[ext]',
				}
			}]
		},
		{

			test: /\.(ttf)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '/assets/fonts/[name].[ext]'
				}
			}]
		},			
		{

			test: /\.(mp3)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: resolve(__dirname, 'build/static/music/')
				}
			}]
		}
		]
	},
	resolve: {
		alias:{
			static: resolve(__dirname, 'src/static/'),
		}
	},
	 plugins: [
        new CopyWebpackPlugin([
            { from: '**/*.php', to: resolve(__dirname, 'build/'), context: './src/' },
            { from: 'static/', to: resolve(__dirname, 'build/static'),  context: './src/'},
            { from: 'client/assets', to: resolve(__dirname, 'build/client/assets/'),  context: './src/'},
        ])
        // new ExtractTextPlugin('style.css')
    ]
}