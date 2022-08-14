const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
	publicPath: "/vue-weather-widget",
	transpileDependencies: true,
	pwa: {
		name: "vue-weather-widget",
		short_name: "vue-weather-widget",
		display: "standalone",
		start_url: ".",
		themeColor: "#ffffff",
		msTileColor: "#ffffff",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "white",

		workboxOptions: {
			skipWaiting: true,
		},
	},
});
