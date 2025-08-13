# <a href="https://clear-cast-app.netlify.app/" target="_blank">ClearCast</a>

<div align="center">
<a href="https://teronbullock.com/project/clearcast" target="_blank" aria-label="Go to ClearCast project page on teronbullock.com">
<img src="https://github.com/Teronbullock/myImages/blob/main/gif/clearcast-demo.gif?raw=true" width="60%" alt="Gif of the FlashLearn app"/>
</a>
</div>

## <a href="https://clear-cast-app.netlify.app/" target="_blank">View ClearCast App</a>

A responsive React weather application featuring automatic location detection, real-time forecasts, and dynamic background imagery that adapts to current conditions. 
Built with Next.js and optimized for performance with seamless updates and zero page reloads.
<br>
<br>
**Key Features:**
- Geolocation API integration with manual ZIP/city fallback
- Real-time weather data with hourly forecasts  
- Dynamic UI that visually reflects weather conditions
- Component-based architecture for maintainability and scalability


## Tech Stack: 
<img alt="Static Badge" src="https://img.shields.io/badge/Next.js-0B62A4?style=flat&logo=nextdotjs&logoColor=black&labelColor=white"> <img alt="Static Badge" src="https://img.shields.io/badge/React-0B62A4?style=flat&logo=React&logoColor=black&labelColor=white"> <img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-0B62A4?style=flat&logo=TypeScript&logoColor=black&labelColor=white"> <img alt="Static Badge" src="https://img.shields.io/badge/JavaScript (ES6+)-0B62A4?style=flat&logo=JavaScript&logoColor=black&labelColor=white"> <img alt="Static Badge" src="https://img.shields.io/badge/Tailwind CSS-0B62A4?style=flat&logo=TailWindcss&logoColor=black&labelColor=white"> <img alt="Static Badge" src="https://img.shields.io/badge/SASS-0B62A4?style=flat&logo=SASS&logoColor=black&labelColor=white">

## Optimizations

The next major optimization would be implementing user authentication via Auth.js with PostgreSQL integration to enable location saving and management. This would allow users to quickly switch between their saved locations with a single click.

I'd integrate AI-powered recommendations that analyze current weather conditions against user activities (commuting, exercising, outdoor events) to provide personalized, actionable suggestions. This would include location-based news integration using AI to surface relevant local weather alerts and news stories.

I'd implement Redis caching for weather data and optimize the API call patterns to reduce redundant requests when users switch between saved locations.


## Lessons Learned

Building ClearCast taught me the importance of robust state management when handling multiple asynchronous operations, from geolocation requests to weather API calls. I learned to effectively structure React Context to manage complex weather state objects with proper loading, error, and success states. Working with the OpenWeatherMap API helped me to understand data transformation and error handling patterns for external services.

The dynamic background feature challenged me to think about performance optimization when frequently updating DOM elements based on weather conditions. I learned how investing in proper TypeScript interfaces and component architecture from the start prevents significant refactoring as features expand.


## Installation
```shell
# Clone the repository
git clone https://github.com/Teronbullock/ClearCast.git

# Navigate to project directory
cd ClearCast

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your API keys to .env.local
WEATHER_API_KEY=your_weather_api_key_here
```

## Usage

1. run `npm run dev`
2. Open http://localhost:3000 to view the application.
<br>

## More Projects

<table bordercolor="#0B62A4">
  <tr>
    <td width="50%"  style="align:center;" valign="top">
      <h3><a target="_blank" href="https://github.com/Teronbullock/flashlearn-mern">FlashLearn</a></h3>
      <br />
      <a target="_blank" href="https://github.com/Teronbullock/myImages/blob/main/gif/flashlearn-demo.gif">
        <img src="https://github.com/Teronbullock/myImages/blob/main/gif/flashlearn-demo.gif?raw=true" width="100%"  alt="flashlearn gif"/>
      </a>
    </td>
    <td width="50%" valign="top">
      <h3><a target="_blank" href="https://github.com/Teronbullock/teronbullock-theme">Portfolio</a></h3>
      <br />
      <a target="_blank" href="https://github.com/Teronbullock/teronbullock-theme">
        <img src="https://github.com/Teronbullock/myImages/raw/main/gif/teronbullock-demo.gif" width="100%" alt="Portfolio"/>
      </a>
    </td>
  </tr>
</table>
