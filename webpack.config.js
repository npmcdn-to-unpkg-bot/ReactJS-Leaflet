module.exports = {
    entry: "./entry.jsx",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    devServer: { 
        inline: true, 
        port: 8081 
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
              },
            { 
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    }
};