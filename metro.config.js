module.export = {
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx"], //Add here
  },
  transformer: {
    babelTransformerPath: require.resolve("react-native-dotenv"),
  },
};
