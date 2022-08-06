# Weather Widget.

<br/>

Main screen             |  Settings
:-------------------------:|:-------------------------:
![image](https://user-images.githubusercontent.com/69040554/183245278-c2a07198-d54e-44c5-a08e-4d2e13a1ce64.png)  |  ![image](https://user-images.githubusercontent.com/69040554/183245320-895fa497-b212-4e68-8d08-be10040d78ac.png)

Technical specification: https://plumsailteam.sharepoint.com/:w:/s/recruitment/EfN6xudVCOBLheWof-8S9vYB4lMxNaKRiJfm9GEugQsjnQ?rtime=uynXK6x22kg

## 📍 Demo.

> https://inagamov.github.io/vue-weather-widget/

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

## 📍 Setup (for developers).

1. Create `.env` file in the root folder.

2. Add two variables to `.env` file: <br/>
`VUE_APP_OPEN_WEATHER_API_KEY` - [OpenWeather API](https://openweathermap.org/api) key.<br/>
`VUE_APP_IPINFO_TOKEN` - [ipinfo](https://ipinfo.io/) token.

3. Run `npm install` from the root folder.

4.1. To launch in development mode, run `npm run serve`.

4.2. To build for production, run `npm run build`.
