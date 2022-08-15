<template>
	<div>
		<p class="settings__content__title">Color Scheme.</p>

		<div class="settings__content__color_scheme">
			<!-- Dark mode -->
			<p :class="this.checked == false ? 'settings__content__color_scheme__title__active' : 'settings__content__color_scheme__title'">
				PM
			</p>

			<!-- Switch button -->
			<div class="switch">
				<label>
					<input type="checkbox" id="color-scheme-switch" v-model="this.checked" @change="toggleColorScheme($event)" />
					<span class="slider"></span>
				</label>
			</div>

			<!-- Light mode -->
			<p :class="this.checked == true ? 'settings__content__color_scheme__title__active' : 'settings__content__color_scheme__title'">
				AM
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		checked: null,
	}),

	mounted() {
		// Set switch button prop according to the local storage
		this.checked = localStorage.getItem("color-scheme") == "light" ? true : false;
	},

	methods: {
		toggleColorScheme() {
			// Change color scheme at the local storage
			localStorage.setItem("color-scheme", this.checked == true ? "light" : "dark");

			// Apply new color scheme
			const color_scheme = localStorage.getItem("color-scheme");
			document.documentElement.setAttribute("data-color-scheme", color_scheme);
		},
	},
};
</script>

<style>
@import "./ColorScheme.css";
</style>
