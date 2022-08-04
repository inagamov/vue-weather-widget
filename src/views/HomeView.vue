<template>
	<div class="app">
		<settings v-if="settingsVisibility" @toggleSettingsVisibility="toggleSettingsVisibility()"></settings>

		<navbar @toggleSettingsVisibility="toggleSettingsVisibility()"></navbar>

		<board v-if="!loading"></board>
		<loader v-else></loader>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

import Settings from "../components/Settings/Settings.vue";
import Board from "../components/Board/Board.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import Loader from "@/components/Loader/Loader.vue";

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

			app.addEventListener("scroll", function () {
				let navbar = document.getElementsByClassName("navbar")[0];

				if (app.scrollTop > 20) {
					navbar.classList.add("navbar__sticked");
				} else {
					navbar.classList.remove("navbar__sticked");
				}
			});
		},
	},
};
</script>
