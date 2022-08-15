<template>
	<router-view />
</template>

<script>
export default {
	mounted() {
		this.checkColorScheme();
	},

	methods: {
		checkColorScheme() {
			const color_scheme = localStorage.getItem("color-scheme");

			// Set color scheme prop, if it hasn't been set yet
			if (!color_scheme) {
				if (window.matchMedia("(prefers-color-scheme: light)").matches) {
					localStorage.setItem("color-scheme", "light");
				} else {
					localStorage.setItem("color-scheme", "dark");
				}
			}

			this.applyColorScheme();
		},

		applyColorScheme() {
			const color_scheme = localStorage.getItem("color-scheme");
			document.documentElement.setAttribute("data-color-scheme", color_scheme);
		},
	},
};
</script>

<style>
@import "./assets/styles/App.css";
</style>
