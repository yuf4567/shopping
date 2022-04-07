module.exports = {
    //关闭eslint
    lintOnSave: false,
    devServer: {
        proxy: {
            //会把请求路径中的/api换为后面的代理服务器
            '/api': {
                //提供数据的服务器地址
                target: 'http://39.98.123.211',
                // pathRewrite: { '^/api': '' },
            }
        },
    }
}