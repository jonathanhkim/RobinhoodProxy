module.exports = {
  entry: {
    vendor: ["styled-components"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity
    })
  ],
  resolve: {
    alias: {
      "styled-components": path.resolve(RobinHoodProxy, "node_modules", "styled-components")
    }
  }
}
