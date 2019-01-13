/**
 * Variables
 */
const fetch = require("node-fetch");

/**
 * Declaration
 */
module.exports = class getWeather {
    constructor(key) {
        this.key = key;
    }
    async getWeather(city) {
        try {
            let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.key}`);
            let res = await data.json();
            return res;
        } catch (error) {
            throw error;
        }
    }
};