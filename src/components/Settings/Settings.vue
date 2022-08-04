<template>
	<div class="settings">
		<!-- Mask -->
		<div class="settings__mask" @click="closeSettings()"></div>

		<!-- Content -->
		<div class="settings__content">
			<!-- Title -->
			<h1>Settings.</h1>
			<svg class="settings__content__close_button" @click="closeSettings()" viewBox="0 0 311 311.07733">
				<path
					d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"
				/>
				<path
					d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"
				/>
			</svg>

			<!-- Content -->
			<LocationsList></LocationsList>
			<AddLocation></AddLocation>
		</div>
	</div>
</template>

<script>
import AddLocation from "./AddLocation.vue";
import LocationsList from "./LocationsList.vue";

export default {
	components: {AddLocation, LocationsList},

	methods: {
		closeSettings() {
			document.getElementsByClassName("settings__content")[0].style.animation = "fadeOut_slideDown 0.275s ease-in-out";
			document.getElementsByClassName("settings__mask")[0].style.animation = "fadeOut 0.275s ease-in-out";

			setTimeout(() => {
				this.$emit("toggleSettingsVisibility");
			}, 275);
		},
	},
};
</script>

<style>
@import "./Settings.css";
</style>
