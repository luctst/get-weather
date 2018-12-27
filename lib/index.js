/**
 * Variables
 */
const fetch = require("node-fetch");

/**
 * Déclaration
 */
module.exports.getWeather = async (apiKey, city) => {
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`);
        let json = await data.json();
        return json;
    } catch (error) {
        throw new TypeError(`Oups.. there is a little problem`);
    }
}