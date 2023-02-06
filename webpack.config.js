// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    accordion: './src/assets/js/accordion.js',
    swiper: './src/assets/js/swiper.js',
    tab: './src/assets/js/tab.js',
    modal: './src/assets/js/modal.js',
    tooltip: './src/assets/js/tooltip.js',
    form: './src/assets/js/form.js',
    toast: './src/assets/js/toast.js'
  },
  output: {
    filename: 'src/assets/js/[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/src/views'),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options: {
            configFile: './.babelrc',
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        dependency: { not: ['url'] },
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: "dist",
              path: '/src/assets/images/',
              name: '[path][name].[ext]?[hash]',
              esModule: false,
            },
          }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'index',
      filename : './index.html',
      template: './index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Header',
      filename : './src/views/header.html',
      template: './src/views/header.html',
      chunks: ['header']
    }),
    new HtmlWebpackPlugin({
        title: 'Accordion',
        filename : './src/views/accordion.html',
        template: './src/views/accordion.html',
        chunks: ['accordion']
    }),
    new HtmlWebpackPlugin({
      title: 'Tab',
      filename : './src/views/tab.html',
      template: './src/views/tab.html',
      chunks: ['tab']
    }),
    new HtmlWebpackPlugin({
      title: 'Modal',
      filename : './src/views/modal.html',
      template: './src/views/modal.html',
      chunks: ['modal']
    }),
    new HtmlWebpackPlugin({
      title: 'Tooltip',
      filename : './src/views/tooltip.html',
      template: './src/views/tooltip.html',
      chunks: ['tooltip']
    }),
    new HtmlWebpackPlugin({
      title: 'Form',
      filename : './src/views/form.html',
      template: './src/views/form.html',
      chunks: ['form']
    }),
    new HtmlWebpackPlugin({
      title: 'Toast',
      filename : './src/views/toast.html',
      template: './src/views/toast.html',
      chunks: ['toast']
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "src/assets/css/style.css",
      chunkFilename: "[id].css"
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};