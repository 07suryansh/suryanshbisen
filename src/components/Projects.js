import React, { useEffect, useState } from "react";
import axios from "axios";
import "./projects.css";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    const apiKey = process.env.REACT_APP_API;
    const projectsApi=`${apiKey}/projects`;
    // console.log(projectsApi);
    axios.get(projectsApi).then((response)=>{
      // console.log(response.data);
      setProjects(response.data);
    }).catch((error)=>{
      console.log(error);
    })
    
  },[]);
  // console.log(projects);
  return (
    <>
      <div>
        <div className="projects-container">
          <div className="projects-heading">
          </div>
          {projects?.map((val,key)=>(<ProjectCard
            key={key}
            heading={val.title}
            tech={val?.techs?.map((e, index) => (
              <div
                key={index}
                className="tech-bar"
              >
                {e}
              </div>
            ))
            }
            imglink={val.imageUrl}
            url={val.websiteLink}
            github={val.githubLink}
            info={val.info}
          />))}
        </div>
      </div>
    </>
  );
}
