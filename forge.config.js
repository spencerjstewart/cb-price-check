module.exports = {
  packagerConfig: {
    asar: true,
    // Additional packager configurations can be added here
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "price-check-app", // replace with your app's name
        // Additional Squirrel.Windows configurations
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      // Add maker for Windows zip if you plan to have a portable version
      name: "@electron-forge/maker-zip",
      platforms: ["win32"],
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
    },
  ],
};
