

import weather_app from "./static/projects_images/weather_app_project.png"
import asianhouse from "./static/projects_images/asianhouse_project_card.png"
import music_app from "./static/projects_images/music_app_image.png"
import converter_app from "./static/projects_images/converter_project.png"
import stickers_app from "./static/projects_images/stickers_project.png"
const projects = {

    'ReactJS': [
        {
            image: weather_app,
            name: "Weather-app",
            technologies: ['ReactJS'],
            urlPage: "https://monalisssa.github.io/react-weather/",
            githubUrl: "https://github.com/monalisssa/react-weather.git",
            description: "The application uses OpenWeatherMap Api to obtain weather forecast data. Has dark and light theme.",
        },
        {
            image: asianhouse,
            name: "Asianhouse",
            technologies: ['ReactJS', 'Bootstrap', 'MobX', 'Java'],
            urlPage: "",
            githubUrl: "https://github.com/monalisssa/asianhouse",
            description: "This is a food delivery service. It is a fullstack app. There are two roles: admin and user.",
        },
        {
            image: music_app,
            name: "Music-app",
            technologies: ['ReactJS', 'Tailwind'],
            urlPage: "https://monalisssa.github.io/music-app/",
            githubUrl: "https://github.com/monalisssa/music_app",
            description: "The application uses SpotifyApi to search for tracks. It is also possible to listen to the track.",
        },

    ],

    'JavaScript': [
        {
            image: stickers_app,
            name: "Stickers-app",
            technologies: ['Javascript'],
            urlPage: "https://monalisssa.github.io/stickers/",
            githubUrl: "https://github.com/monalisssa/stickers",
            description: "The application for creating stickers. You can choose background-color and images for sticker.",
        },
        {
            image: converter_app,
            name: "Converter",
            technologies: ['Javascript', 'SCSS'],
            urlPage: "https://monalisssa.github.io/converter/",
            githubUrl: "https://github.com/monalisssa/converter",
            description: "The applications for converting the currency of Belarus into other currencies at the rate of the National Bank of the Republic of Belarus.",
        },

    ]

}

export default projects