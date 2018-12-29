/**
 * Variables
 */
const fetch = require("node-fetch");

/**
 * Déclaration
 */
module.exports = async (apiKey, city) => {
    try {
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`);
        let res = await data.json();
        return res;
    } catch (error) {
        throw error;
    }
}