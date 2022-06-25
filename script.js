const TOKEN =
	"pk.eyJ1IjoianNjaGx0ZSIsImEiOiJjbDRzeTNpdWMwMXh6M2pxejhjNGs1dm8xIn0.apl9U3188mmLpYasK2QlVQ";

var map = new mapboxgl.Map({
	accessToken: TOKEN,
	container: "map",
	style: "mapbox://styles/mapbox/streets-v11",
});

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
	enableHighAccuracy: true,
});

function successLocation(position) {
	setupMap([position.coords.longitude, position.coords.latitude]);
}

function setupMap(centerPosition) {
	const map = new mapboxgl.Map({
		accessToken: TOKEN,
		container: "map",
		style: "mapbox://styles/mapbox/streets-v11",
		center: centerPosition,
		zoom: 13,
	});
	const navContrls = new mapboxgl.NavigationControl();
	map.addControl(navContrls, "top-left");

	const directionControls = new MapboxDirections({
		accessToken: TOKEN,
	});
	map.addControl(directionControls, "top-right");
}
function errorLocation() {
	console.log("Cannot get location.");
	setupMap(0, 0);
}
