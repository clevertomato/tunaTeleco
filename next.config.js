const withVideos = require('next-videos')
 
module.exports = withVideos({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Important: return the modified config
        config.module.rules.push({
            test: /\.pdf$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        });
        return config
      },
  })