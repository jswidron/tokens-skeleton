const StyleDictionary = require("style-dictionary");

const jsFlatFormat = {
  name: "javascript/flat",
  formatter: ({ properties }) => {
    return `module.exports = ${JSON.stringify(properties, null, 2)}`;
  },
};

StyleDictionary.registerFormat(jsFlatFormat);

module.exports = {
  source: ["src/tokens/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "build/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
};
