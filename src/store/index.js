import {createStore} from "vuex";
import axios from "axios";

export default createStore({
	state: {
		locations: [],
		weather: [],
		loading: false,
	},

	getters: {
		GET_LOCATIONS(state) {
			return state.locations;
		},

		GET_WEATHER(state) {
			return state.weather;
		},

		GET_LOADING(state) {
			return state.loading;
		},
	},

	mutations: {
		UPDATE_LOCATIONS(state) {
			let locations = JSON.parse(localStorage.getItem("locations"));
			locations !== null ? (state.locations = locations) : (state.locations = []);
		},

		ADD_WEATHER(state, data) {
			state.weather.push(data);
		},

		REMOVE_WEATHER(state, index) {
			state.weather.splice(index, 1);
		},

		SWAP_WEATHER(state, indexes) {
			let {startIndex, endIndex} = indexes;

			let temp = state.weather[startIndex];
			state.weather[startIndex] = state.weather[endIndex];
			state.weather[endIndex] = temp;
		},

		SET_LOADING(state, value) {
			state.loading = value;
		},
	},

	actions: {
		setLocalStorageLocations({commit}, locations) {
			localStorage.setItem("locations", JSON.stringify(locations));
			commit("UPDATE_LOCATIONS");
		},

		async check({state, commit, dispatch}) {
			// No locations in local storage
			if (!state.locations[0]) {
				commit("SET_LOADING", true);

				// Fetch user location
				await dispatch("fetchUserLocaiton").then((user_location) => {
					let locations = [{id: new Date(), city: user_location.city, country: user_location.country}];
					dispatch("setLocalStorageLocations", locations);

					commit("SET_LOADING", false);
				});
			}

			// Load weather data after checking locations
			dispatch("loadData");
		},

		async fetchUserLocaiton() {
			try {
				let response = await axios.get(`https://ipinfo.io/json?token=${process.env.VUE_APP_IPINFO_TOKEN}`);
				return response.data;
			} catch (error) {
				console.log(error);
			}
		},

		async loadData({state, commit, dispatch}) {
			commit("SET_LOADING", true);

			for (let i = 0; i < state.locations.length; i++) {
				await dispatch("fetchWeather", state.locations[i].city, state.locations[i].country);
			}

			commit("SET_LOADING", false);
		},

		async fetchWeather({commit}, city, country) {
			try {
				await axios
					.get(
						`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`
					)
					.then((response) => {
						commit("ADD_WEATHER", response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			} catch (error) {
				console.log(error);
			}
		},
	},

	modules: {},
});
