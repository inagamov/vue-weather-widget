# Weather Widget.

<br/>

Main screen             |  Settings
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/69040554/183245278-c2a07198-d54e-44c5-a08e-4d2e13a1ce64.png)  |  ![image](https://user-images.githubusercontent.com/69040554/183245320-895fa497-b212-4e68-8d08-be10040d78ac.png)

## 📍 Demo.

> https://inagamov.github.io/vue-weather-widget/

<br/>

## 📍 Setup (for users).

Just <b>copy & paste</b> this code snippet into your project to use this widget!

```
<iframe
	width="680"
	height="460"
	src="https://inagamov.github.io/vue-weather-widget/"
	title="Weather Widget"
	frameborder="0"
	allow="accelerometer; clipboard-write; picture-in-picture"
	allowfullscreen
></iframe>
```

<br/>

## 📍 Setup (for developers).

1. Download the repository.

2. Create `.env` file in the root folder.

3. Add two variables to `.env` file: <br/>
`VUE_APP_OPEN_WEATHER_API_KEY` - [OpenWeather API](https://openweathermap.org/api) key.<br/>
`VUE_APP_IPINFO_TOKEN` - [ipinfo](https://ipinfo.io/) token.

4. Run `npm install` from the root folder.

5.1. To launch in development mode, run `npm run serve`.

5.2. To build for production, run `npm run build`.
