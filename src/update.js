const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');

(async () => {
    const ReadMe = path.join(__dirname, '..', 'README.md')
    const date = new Date()

    //Fetching Info From Github API
    let UserData = await fetch('https://api.github.com/users/DavidCavallaro').then(res => res.json())

    //Creating the text what we gonna save on ReadMe file
    const text = `<!-- You found this secret 👏 -->
<!--
    My secret things lol
    
    - I code more hours 
    - I am a gamer too 
    - I play minecraft, roblox, AMOUNG US ;-;
    - This readme.md is created using GitHub Codespaces 👀
-->
    
<h1 align="center">Who am I?</h1>
    
## Hello, Im Sudhan
\`\`\`js
const Sudhan = {
    Age: 17,
    Description: "I'm using JavaScript more these days",
    FavouriteLanguage: "Javascript",
    OpenedIssues: {{ ISSUES }},
    OpenedPullRequests: {{ PULL_REQUESTS }},
    TotalCommits: {{ COMMITS }},
    Repositories: {
       Created: {{ REPOSITORIES }},
       Contributed: {{ REPOSITORIES_CONTRIBUTED_TO }}
    },
    Stars: {{ STARS }},
    FavouriteThings: ["HTML", "VS Code", "Wumps", "Node.js", "CSS", "Chill Castle <3"]
}; //I'm a Object. UwU
\`\`\`
<hr>
<div align="center">
<h2 align="left">Languages and Tools:</h2>
<p align="left"> </a> <a href="https://canvasjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </a> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> </p>
</div>
## How I became a developer?
Check [How I became a developer by clicking here :)](https://github.com/DavidCavallaro/DavidCavallaro/blob/master/How%20I%20became%20a%20dev.md)
## Stats
<hr>
<div align="center"><img src="https://github-profile-trophy.vercel.app/?username=DavidCavallaro&theme=dracula"></div>
![Profile Views](https://komarev.com/ghpvc/?username=DavidCavallaro&color=blueviolet)&nbsp;&nbsp;![Profile Followers](https://img.shields.io/badge/Followers-${UserData.followers}-blueviolet)&nbsp;&nbsp;![Profile Following](https://img.shields.io/badge/Following-${UserData.following}-blueviolet)&nbsp;&nbsp;![Profile Stars](https://img.shields.io/badge/Stars-{{ STARS }}-blueviolet)
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
<details>
    <summary><b>GitHub</b> Activity</summary>
    <img align="left" src="https://github-readme-stats.vercel.app/api?username=DavidCavallaro&theme=tokyonight"><img align="right" src="https://github-readme-stats.vercel.app/api/top-langs/?username=DavidCavallaro&theme=tokyonight&hide=batchfile">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=DavidCavallaro&theme=tokyonight">
</details>
<!-- Last updated on ${date.toString()} ;-;-->
<i>Last updated on ${date.getDate()}${date.getDate()===1?"st":date.getDate()===2?"nd":date.getDate()===3?"rd":"th"} ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getFullYear()} using magic</i> ✨`

    //Saving on readme.md
    fs.writeFileSync(ReadMe, text)
})()