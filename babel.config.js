// babel.config.js
module.exports = {
  presets: [
    ["@parcel/babel-preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
