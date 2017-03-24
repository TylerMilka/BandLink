import path from 'path'
import webpack from 'webpack';

export default {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname, '/client/index.js')
    ], //array of strings
    output: { 
        path: '/',
        publicPath: '/' //sets the publicPath from index.js
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(), //handles error in a cleaner fashion
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {  //handles loaders 
        loaders: [
            { 
                test: /|.js$/, //tells webpack to look and read js format
                include: path.join(__dirname, 'client'),
                loaders: [ 'babel-loader' ]  //react hot loader teaches react how to reload itself
            }
        ]
},
    resolve: { 
        extensions: [ ' ', '.js']
    }

}
