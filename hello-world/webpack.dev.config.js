const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container


module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9001/',
    // clean: {dry: true,  keep: /\.css/ }
  },
  mode: 'development',
  devServer: {
    port: 9001,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: 'hello-world.html',
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|webp)$/,
        type: 'asset',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
    ],
  },
  plugins: [
    // new TerserPlugin(),
    /*new MiniCssExtractPlugin({
      filename: 'style[contenthash].css',
    }),*/
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*', //the base path is path: path.resolve(__dirname, './dist')
        path.join(process.cwd(), 'build/**/*'),
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Hello worlds',
      filename: "index.html",
      template: 'src/index.hbs',
      description: 'some description',
      //meta: {description: 'Some description' }
    }),
    new ModuleFederationPlugin({
      name: 'HelloworldApp',
      filename: 'remoteEntry.js',
      exposes: {
        './helloWorldButton': './src/components/hello-world-button/hello-world-btn.js'
      }
    }),
  ],
};
