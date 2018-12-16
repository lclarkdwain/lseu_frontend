module.exports = {
  devServer: {
    proxy: {
      '/api_example*': {
        // Forward frontend dev server request for /api to django dev server
        target: 'http://localhost:8000/',
      }
    }
  }
}