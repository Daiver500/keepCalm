const path = require('path');
const webpack = require("webpack");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry:  {
    main: path.resolve(__dirname, './source/js/app.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'source'),
    },
    liveReload: true,
    open: true,
    hot: true,
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      { test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: "source/img", to: "img" },
        { from: "source/fonts", to: "fonts" },
        { from: "source/index.html", to: "" }
      ]
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png)$/i
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  }
};
