const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'http://localhost:9001/',
    // clean: {dry: true,  keep: /\.css/ }
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 3000
    }
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].css',
    }),
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
      description: 'Hello World',
      minify: false,
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
