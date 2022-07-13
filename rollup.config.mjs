import kite from 'ht-kit/rollup.js'

const config = kite({
    routes: './routes',
    output: './output',
    adapter: 'node'
})

export default config