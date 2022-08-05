<template>
	<div class="app">
		<!-- Settings -->
		<settings v-if="settingsVisibility" @closeSettings="toggleSettingsVisibility()"></settings>
		<navbar @openSettings="toggleSettingsVisibility()"></navbar>

		<!-- Content -->
		<loader v-if="loading"></loader>
		<board v-else></board>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

// Components
import Settings from "../components/Settings/Settings.vue";
import Board from "../components/Board/Board.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import Loader from "../components/Loader/Loader.vue";

export default {
	name: "HomeView",
	components: {
		Settings,
		Board,
		Navbar,
		Loader,
	},

	data: () => ({
		settingsVisibility: false,
	}),

	computed: {
		...mapGetters({
			loading: "GET_LOADING",
		}),
	},

	mounted() {
		this.$store.commit("UPDATE_LOCATIONS");
		this.$store.dispatch("check");

		// Add on scroll listener for content (to change navbar styles)
		this.onScrollListener();
	},

	methods: {
		toggleSettingsVisibility() {
			this.settingsVisibility = !this.settingsVisibility;
		},

		onScrollListener() {
			let app = document.getElementsByClassName("app")[0];
			let navbar = document.getElementsByClassName("navbar")[0];

			app.addEventListener("scroll", function () {
				// Toggle sticked class depending on scroll position
				app.scrollTop > 20 ? navbar.classList.add("navbar__sticked") : navbar.classList.remove("navbar__sticked");
			});
		},
	},
};
</script>
