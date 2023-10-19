import axios from 'axios';
import chalk from 'chalk';

const API_KEY = '1fc0f50818701ba1b8f01cc145315b71';

async function getWeather(city){
    try {
        let endPoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        const response = await axios.get(endPoint,{
            params:{
                q:city,
                appid:API_KEY,
                units:'metric'
            }
        });

        // console.log(response.data);
        return response.data;
        
    } catch (err) {
        console.log(chalk.red(err));
        throw new Error(`It's not possible to load the ${city} city information`);
    }
}

function displayWather(city,weatherData){
    console.log(chalk.yellow.bold(`\nWeather information: ${city}`));
    console.log(chalk.yellow('💧☀️🌙🌈☔️🌧💧☀️🌙🌈☔️🌧💧☀️🌙🌈☔️🌧💧☀️🌙🌈☔️🌧\n'))
    console.log(chalk.cyan('Description:'),weatherData.weather[0].description);
    console.log(chalk.cyan('Temperature:'),`${weatherData.main.temp} ºC`); 
    console.log(chalk.cyan('Humidity:'),`${weatherData.main.humidity}%`);
    console.log(chalk.cyan('Wind Speed'),`${weatherData.wind.speed} m/s`)
    console.log(chalk.yellow('💧☀️🌙🌈☔️🌧💧☀️🌙🌈☔️🌧💧☀️🌙🌈☔️🌧💧☀️🌙🌈☔️🌧\n'))
}

function handleError(err){
    console.log(chalk.red('Error: '),err.message);
    process.exit(1);
}

function initApp(){
    let city = process.argv[2];
    // console.log(city);

    // Validaciones
    if(!city){
        console.log(chalk.red('Please insert a valid name of a place or city'));
        console.log(chalk.red('Execute the next command... node app.js [city/place name]'));
    }

    getWeather(city)
    .then(weatherData => displayWather(city,weatherData))
    .catch(handleError);
}


initApp();