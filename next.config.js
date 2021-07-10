module.exports = {
    reactStrictMode: true,
    env: {
        NEXT_API_KEY: '60e342474876ae7086d19d72',
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            /*issuer: {
                test: /\.(js|ts)x?$/,
            },*/
            use: ['@svgr/webpack'],
        });

        return config;
    },
};
