const { merge } = require("webpack-merge");
const webpackTypescript = require("./presets/webpack.typescript");

const applyPresets = (env = {}) => {
  const presets = [env.presets] || [];
  const mergedPresets = presets.map((presetName) => {
    switch (presetName) {
      case "typescript":
        return webpackTypescript();
      default:
        return {};
    }
  });

  return merge(...mergedPresets);
};

module.exports = applyPresets;
