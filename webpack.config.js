const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const threadLoader = require("thread-loader");

// NODE_ENV : development | production
process.env.NODE_ENV =
  process.env.NODE_ENV === "production" ? "production" : "development";

threadLoader.warmup(
  {
    maxConcurrentWorkers: require("os").cpus().length - 1
  },
  ["babel-loader", "ts-loader", "sass-loader"]
);
const threadPoolOptions = {
  workers: require("os").cpus().length - 1
};

const config = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, "./src/Root.tsx"),
  output: {
    filename: "[name].[hash].js",
    path: path.join(__dirname, "./dist"),
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "" // 打包后的资源的访问路径前缀
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: "thread-loader",
            options: threadPoolOptions
          },
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true,
              transpileOnly: true
            }
          }
        ],
        // 排除node_modules底下的
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "thread-loader",
            options: threadPoolOptions
          },
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true }
          },
          "postcss-loader",
          "sass-loader"
        ],
        exclude: [path.resolve(__dirname, "node_modules")]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name]-[hash:8].[ext]",
              publicPath: "images/",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".js", ".ts", ".tsx", ".less", ".scss", ".png"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    historyApiFallback: true,
    disableHostCheck: true,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:3000"
      }
    },
    port: 8000,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      inject: true
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  config.optimization = config.optimization || {};
  config.optimization.minimizer = config.optimization.minimizer || [];
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.output.filename = "[name].js";
  config.output.chunkFilename = "[name].js";
  config.devtool = "source-map";
  threadPoolOptions.poolTimeout = Infinity;
}

module.exports = config;
