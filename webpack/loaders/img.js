module.exports = [
  {
    test: /\.(png|jpg)$/,
    loader: 'url',
    query: {
      limit: 8192
    }
  }
]
