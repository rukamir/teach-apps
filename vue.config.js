module.exports = {
  configureWebpack: {
    plugins: [
    ]
  },
  pages: {
    grader: {
      // entry for the page
      entry: 'src/grader/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'grader/index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'EZ Grader'
    },
    assistant: {
      entry: 'src/assistant/main.js',
      template: 'public/index.html',
      filename: 'assistant/index.html',
      title: 'Grading Assistant'
    }
  }
}