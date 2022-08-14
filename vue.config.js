const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
	publicPath: "/vue-weather-widget",
	transpileDependencies: true,
	pwa: {
		name: "vue-weather-widget",
		short_name: "vue-weather-widget",
		display: "standalone",
		start_url: ".",
		themeColor: "#000000",
		msTileColor: "#000000",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",

		workboxOptions: {
			skipWaiting: true,
		},
	},
});
