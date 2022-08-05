<template>
	<div>
		<p class="settings__content__title">Your Locations.</p>

		<div class="settings__content__locations" @dragover.prevent>
			<div
				v-for="item in this.locations"
				:key="item.id"
				class="settings__content__locations__item"
				draggable="true"
				@dragstart="onDragStart($event, item)"
				@dragenter="onDragEnter($event)"
				@dragleave="onDragLeave($event)"
				@drop="onDrop($event, item)"
			>
				<!-- Drag & Drop icon -->
				<div class="settings__content__locations__item__drag_icon">
					<svg>
						<path
							d="M14.5 15.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 15.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 15.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 10.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 10.5zm5-5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0114.5 5.5zm-5 0a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 019.5 5.5z"
						></path>
					</svg>
				</div>

				<!-- Item content -->
				<div class="settings__content__locations__item__title">
					<p>{{ item.city }}</p>
					<img
						v-if="item.country !== 'UK'"
						:src="`https://flagcdn.com/20x15/${item.country.toLowerCase()}.png`"
						:srcset="`https://flagcdn.com/40x30/${item.country.toLowerCase()}.png 2x, https://flagcdn.com/60x45/${item.country.toLowerCase()}.png 3x`"
						width="20"
						height="15"
						:alt="item.country"
					/>

					<!-- ! Exception for UK ! -->
					<img
						v-else
						src="https://flagcdn.com/20x15/gb.png"
						srcset="https://flagcdn.com/40x30/gb.png 2x, https://flagcdn.com/60x45/gb.png 3x"
						width="20"
						height="15"
						:alt="item.country"
					/>
				</div>

				<!-- Remove item icon -->
				<div class="settings__content__locations__item__remove_icon" @click="removeLocation(item)">
					<svg viewBox="0 0 407.521 407.521">
						<path
							d="M335.94,114.944H71.581c-2.86-0.243-5.694,0.702-7.837,2.612c-2.107,2.024-3.083,4.954-2.612,7.837l27.167,236.669 c3.186,26.093,25.436,45.647,51.722,45.453h131.657c27.026,0.385,49.791-20.104,52.245-47.02l22.465-236.147 c0.139-2.533-0.811-5.005-2.612-6.792C341.634,115.646,338.8,114.701,335.94,114.944z M303.026,359.45 c-1.642,15.909-15.366,27.803-31.347,27.167H140.022c-15.694,0.637-29.184-11.024-30.825-26.645L83.075,135.842h241.371 L303.026,359.45z"
						/>
						<path
							d="M374.079,47.026H266.454V30.307c0.58-16.148-12.04-29.708-28.188-30.288c-0.53-0.019-1.061-0.024-1.591-0.014h-65.829 c-16.156-0.299-29.494,12.555-29.793,28.711c-0.01,0.53-0.005,1.061,0.014,1.591v16.718H33.442 c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h340.637c5.771,0,10.449-4.678,10.449-10.449 S379.849,47.026,374.079,47.026z M245.556,30.307v16.718h-83.592V30.307c-0.589-4.579,2.646-8.768,7.225-9.357 c0.549-0.071,1.104-0.086,1.656-0.047h65.829c4.605-0.326,8.603,3.142,8.929,7.748C245.643,29.203,245.627,29.758,245.556,30.307 z"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	computed: {
		...mapGetters({
			locations: "GET_LOCATIONS",
		}),
	},

	methods: {
		isInArray(needle, haystack) {
			for (var i in haystack) {
				if (haystack[i] == needle) return true;
			}
			return false;
		},

		onDragStart(event, item) {
			event.dataTransfer.dropEffect = "move";
			event.dataTransfer.effectAllowed = "move";

			let startIndex = this.locations.findIndex((e) => e.id == item.id);
			event.dataTransfer.setData("startIndex", startIndex);
		},

		onDragEnter(event) {
			// The hovered element must be the parent one (to avoid adding new class to icons, children)
			if (this.isInArray("settings__content__locations__item", event.target.classList)) {
				event.target.classList.add("settings__content__locations__item__over");
			}
		},

		onDragLeave(event) {
			event.target.classList.remove("settings__content__locations__item__over");
		},

		onDrop(event, item) {
			let startIndex = event.dataTransfer.getData("startIndex");
			let endIndex = this.locations.findIndex((e) => e.id == item.id);

			// Remove over class from the end item
			document
				.getElementsByClassName("settings__content__locations__item")
				[endIndex].classList.remove("settings__content__locations__item__over");

			// Swap locations
			let locations = this.swapItems(this.locations, startIndex, endIndex);
			this.$store.dispatch("setLocalStorageLocations", locations);

			// Swap weather
			this.$store.commit("SWAP_WEATHER", {startIndex: startIndex, endIndex: endIndex});
		},

		swapItems(array, startIndex, endIndex) {
			let temp = array[startIndex];
			array[startIndex] = array[endIndex];
			array[endIndex] = temp;

			return array;
		},

		removeLocation(item) {
			// Remove weather data
			let index = this.locations.findIndex((e) => e.id == item.id);
			this.$store.commit("REMOVE_WEATHER", index);

			// Remove location
			let locations = this.locations.filter((e) => e.id !== item.id);
			this.$store.dispatch("setLocalStorageLocations", locations);

			// User removed all locations
			if (!this.locations[0]) {
				// Add user location and fetch weather data
				this.$store.dispatch("check");
			}
		},
	},
};
</script>

<style>
@import "./LocationsList.css";
</style>
