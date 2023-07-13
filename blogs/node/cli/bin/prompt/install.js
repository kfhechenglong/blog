export default () => ({
  type: 'list',
  name: 'installTool',
  message: 'select installation Tool',
  default: 'yarn',
  choices: [
    { name: 'yarn' },
    { name: 'npm' }
  ]
})
