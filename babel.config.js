module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/Screens',
            '@utils': './src/utils',
            '@storage': './src/storage',
            '@dtos': './src/dtos',
            '@services': './src/services',
            '@hooks': './src/hooks',
            '@contexts': './src/contexts',
          }
        }
      ]
    ],
  };
};
