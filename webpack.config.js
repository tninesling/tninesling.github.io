const path = require('path');

module.exports = {
  mode: "production",

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, "dist")
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          { loader: "ts-loader" }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
};