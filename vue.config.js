module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true
    },

    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
}
