<template>
	<div>
		<p class="settings__content__title">Add Location.</p>

		<form @submit.prevent="addLocation()" class="settings__content__new_location">
			<div class="settings__content__new_location__fields">
				<div>
					<svg
						:class="`settings__content__new_location__icon
							${new_location.country.complete ? 'settings__content__new_location__icon__complete' : ''}
							${new_location.error ? 'settings__content__new_location__icon__error' : ''}
						`"
						viewBox="0 0 512 512"
					>
						<path
							d="M424.385,20.69C401.182,6.768,376.445,0,348.761,0c-33.122,0-65.635,9.753-97.077,19.185 c-30.716,9.214-59.729,17.917-88.446,17.919c-0.004,0-0.007,0-0.011,0c-19.199,0-36.583-4.064-52.894-12.382V15 c0-8.284-6.716-15-15-15s-15,6.716-15,15v18.551v203.896V497c0,8.284,6.716,15,15,15s15-6.716,15-15V261.453 c16.567,6.4,34.052,9.547,52.906,9.547c33.121,0,65.631-9.753,97.071-19.185c30.718-9.215,59.733-17.919,88.451-17.919 c22.092,0,41.779,5.369,60.188,16.415c4.633,2.78,10.404,2.854,15.108,0.191c4.703-2.663,7.609-7.649,7.609-13.053V33.552 C431.667,28.283,428.903,23.4,424.385,20.69z M251.691,223.081C220.972,232.296,191.957,241,163.24,241 c-19.206,0-36.594-4.058-52.906-12.376V57.566c16.564,6.399,34.046,9.539,52.894,9.538c0.003,0,0.01,0,0.014,0 c33.118-0.002,65.626-9.754,97.063-19.185C291.024,38.704,320.042,30,348.761,30c19.206,0,36.594,4.058,52.905,12.375v171.06 c-16.566-6.4-34.052-9.539-52.905-9.539C315.641,203.896,283.13,213.649,251.691,223.081z"
						/>
					</svg>

					<input
						:class="`settings__content__new_location__input
							${new_location.country.complete ? 'settings__content__new_location__input__complete' : ''}
							${new_location.error ? 'settings__content__new_location__input__error' : ''}
						`"
						type="text"
						id="country_input"
						v-model="new_location.country.text"
						@keyup="onCountryInput"
						@blur="onCountryInput"
						:tabindex="1"
						autocorrect="off"
						spellcheck="false"
						placeholder="Country"
					/>
				</div>

				<div>
					<svg
						:class="`settings__content__new_location__icon
							${new_location.city.complete ? 'settings__content__new_location__icon__complete' : ''}
							${new_location.error ? 'settings__content__new_location__icon__error' : ''}
						`"
						viewBox="0 0 511.999 511.999"
					>
						<path
							d="M409.124,63.426C368.224,22.525,313.843,0,256.001,0S143.777,22.525,102.877,63.426 c-40.901,40.902-63.426,95.282-63.426,153.123c0,117.012,110.638,214.337,170.077,266.623c8.26,7.266,15.393,13.541,21.076,18.849 c7.12,6.651,16.259,9.977,25.396,9.977c9.139,0,18.276-3.326,25.397-9.977c5.683-5.309,12.816-11.583,21.076-18.849 c59.439-52.287,170.077-149.611,170.077-266.623C472.549,158.708,450.025,104.328,409.124,63.426z M282.663,460.654 c-8.441,7.425-15.73,13.838-21.74,19.451c-2.761,2.577-7.085,2.578-9.847,0c-6.009-5.615-13.299-12.027-21.74-19.452 c-55.88-49.155-159.895-140.654-159.895-244.103c0-102.868,83.689-186.557,186.558-186.557 c102.868,0,186.557,83.689,186.557,186.557C442.557,319.999,338.543,411.498,282.663,460.654z"
						/>
						<path
							d="M256.001,112.938c-52.621,0-95.431,42.809-95.431,95.43s42.81,95.43,95.431,95.43s95.43-42.809,95.43-95.43 S308.622,112.938,256.001,112.938z M256.001,273.805c-36.083,0-65.439-29.356-65.439-65.438s29.356-65.438,65.439-65.438 s65.438,29.356,65.438,65.438S292.084,273.805,256.001,273.805z"
						/>
					</svg>

					<input
						:class="`settings__content__new_location__input
							${new_location.city.complete ? 'settings__content__new_location__input__complete' : ''}
							${new_location.error ? 'settings__content__new_location__input__error' : ''}
						`"
						type="text"
						id="city_input"
						v-model="new_location.city.text"
						@keyup="onCityInput"
						@blur="onCityInput"
						:tabindex="2"
						autocorrect="off"
						spellcheck="false"
						placeholder="City"
					/>
				</div>
			</div>

			<button
				class="settings__content__new_location__button"
				type="submit"
				:tabindex="3"
				:disabled="!new_location.country.complete || !new_location.city.complete"
			>
				+
			</button>
		</form>

		<p v-if="new_location.error" class="settings__content__error_message">{{ new_location.error }}</p>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

import autocomplete_locations from "@/assets/locations.min.json";
import lookup from "country-code-lookup";

export default {
	data: () => ({
		autocomplete_locations: autocomplete_locations,
		new_location: {
			country: {text: "", complete: false},
			city: {text: "", complete: false},
			error: null,
		},
	}),

	computed: {
		...mapGetters({
			locations: "GET_LOCATIONS",
		}),
	},

	methods: {
		isEmptyOrSpaces(str) {
			return str === null || str.match(/^ *$/) !== null;
		},

		isInArray(needle, haystack) {
			for (var i in haystack) {
				if (haystack[i] == needle) return true;
			}
			return false;
		},

		uniquenessValidation(locations, new_location) {
			return locations.filter((e) => e.city === new_location.city && e.country === new_location.country);
		},

		clearInputs() {
			this.new_location = {
				country: {text: "", complete: false},
				city: {text: "", complete: false},
				error: null,
			};
		},

		addLocation() {
			let city = this.new_location.city.text;
			let country = lookup.byCountry(this.new_location.country.text).internet;

			let new_location = {
				id: new Date(),
				city: city,
				country: country,
			};

			// New location is unique
			if (this.uniquenessValidation(this.locations, new_location).length == 0) {
				let locations = this.locations;
				locations.push(new_location);

				this.$store.dispatch("setLocalStorageLocations", locations);
				this.$store.dispatch("fetchWeather", city, country);

				this.clearInputs();
			} else {
				this.new_location.error = "This location has already been added.";
			}
		},

		onCountryInput(event) {
			// Clear error data
			this.new_location.error = null;

			if (event.ctrlKey || event.keyCode == 32) {
				return;
			}

			// On any key, except
			if (!this.isInArray(event.keyCode, [8, 37, 13, 39, 16, 17, 18])) {
				this.countryAutocomplete();
			}

			// On backspace
			if (event.keyCode == 8) {
				// Clear country complete prop
				this.new_location.country.complete = false;
			}

			// On "Enter" or "Esc"
			if (event.keyCode == 13 || event.keyCode == 27) {
				document.getSelection().removeAllRanges();
			}
		},

		onCityInput(event) {
			// Clear error data
			this.new_location.error = null;

			if (event.ctrlKey || event.keyCode == 32) {
				return;
			}

			// On any key, except
			if (!this.isInArray(event.keyCode, [8, 37, 13, 39, 16, 17, 18])) {
				this.cityAutocomplete();
			}

			// On backspace
			if (event.keyCode == 8) {
				// Clear city complete prop
				this.new_location.city.complete = false;
			}

			// On "Enter" or "Esc"
			if (event.keyCode == 13 || event.keyCode == 27) {
				document.getSelection().removeAllRanges();
			}
		},

		countryAutocomplete() {
			// Clear country complete prop
			this.new_location.country.complete = false;

			// Country input value
			const country = this.new_location.country.text.trim();

			// Country input is not empty
			if (!this.isEmptyOrSpaces(country)) {
				for (const autocomplete_country in this.autocomplete_locations) {
					if (autocomplete_country.toLowerCase().includes(country.toLowerCase())) {
						// Country name is not complete
						if (autocomplete_country.length != country.length) {
							let start_index = country.length;
							let end_index = autocomplete_country.length;

							// Change country input
							this.new_location.country.text = country + autocomplete_country.slice(start_index, end_index);

							// Select autocompletion part of country input so user can change it in case of not matching
							setTimeout(() => {
								let input_element = document.getElementById("country_input");
								input_element.focus();
								input_element.setSelectionRange(start_index, end_index);
							}, 1);
						} else {
							// Set country complete prop to true
							this.new_location.country.complete = true;
						}

						return;
					}
				}
			}
		},

		cityAutocomplete() {
			// Clear city complete prop
			this.new_location.city.complete = false;

			// City input value
			const city = this.new_location.city.text;

			// Country & city inputs are not empty
			if (!this.isEmptyOrSpaces(this.new_location.country.text) && !this.isEmptyOrSpaces(city)) {
				for (const autocomplete_country in this.autocomplete_locations) {
					if (autocomplete_country == this.new_location.country.text) {
						for (const city_id in this.autocomplete_locations[autocomplete_country]) {
							let autocomplete_city = this.autocomplete_locations[autocomplete_country][city_id];

							if (autocomplete_city.toLowerCase().startsWith(city.toLowerCase())) {
								if (autocomplete_city.toLowerCase() == city.toLowerCase()) {
									// Set city complete prop to true
									this.new_location.city.complete = true;

									return;
								}

								let start_index = city.length;
								let end_index = autocomplete_city.length;

								// Change city input
								this.new_location.city.text = city + autocomplete_city.slice(start_index, end_index);

								// Select autocompletion part of country input so user can change it in case of not matching
								setTimeout(() => {
									let input_element = document.getElementById("city_input");

									input_element.focus();
									input_element.setSelectionRange(start_index, end_index);
								}, 1);
							}
						}
					}
				}
			}
		},
	},
};
</script>

<style>
@import "./AddLocation.css";
</style>
