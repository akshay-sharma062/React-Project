import React from 'react'

function Projects() {
  return (
    <div>
   
  <h2>My Projects</h2>
  <div classnamename="projects-container">

    <div classname="project-card">
      <img src="https://plus.unsplash.com/premium_photo-1681566925294-7ff6eba5a9c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D" alt="portfolio Website" />
      <div classname="project-info">
        <h3>Portfolio Website</h3>
        <p>A personal portfolio website to showcase my skills, projects, and resume. Includes responsive design, interactive sections, and smooth animations.</p>
        <a href="https://akshay-sharma062.github.io/portfolio/#" classname="btn">View Project</a>
      </div>
    </div>

    <div classnamenamec="project-card">
      <img src="https://images.unsplash.com/photo-1614480633894-f3b7f4bb0e76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlciUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D" alt="Weather App" />
      <div classname="project-info">
        <h3>Weather App</h3>
        <p>Displays real-time weather using a third-party API. Includes search by city and forecasts.</p>
        <a href="https://peaceful-chebakia-9d2792.netlify.app/" classname="btn">View Project</a>
      </div>
    </div>

  </div>
    </div>
  )
}

export default Projects
