const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    vendor: ["styled-components"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      minChunks: Infinity
    }
  },
  resolve: {
    alias: {
      "styled-components": path.join(__dirname, "node_modules", "styled-components"),
    }
  },
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
    },
  },
}
