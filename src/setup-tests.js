const noop = () => null
require.extensions['.css'] = noop

process.env.NODE_ENV = 'test'
