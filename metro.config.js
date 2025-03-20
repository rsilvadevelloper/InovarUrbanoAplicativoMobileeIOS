const { getDefaultConfig } = require('@react-native/metro-config');
const { resolve } = require('path');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();

  // Adicione qualquer configuração personalizada, se necessário
  defaultConfig.transformer.babelTransformerPath = resolve(
    __dirname,
    'node_modules/react-native-svg-transformer'
  );

  defaultConfig.resolver.assetExts = [
    ...defaultConfig.resolver.assetExts,
    'svg',
  ];

  return defaultConfig;
})();
