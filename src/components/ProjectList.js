import React from "react";
import ProjectItem from "./ProjectItem";


const projects =[ 
  {
    id:1,
    name:"Recipeplease",
    about:"A recipe tracking app",
    technologies:["Rails","Bootstrap CSS"],
  },
     {
    id:2,
    name:"Kibbles N Bitz",
    about:"Tinder for dogs",
    technologies:["React Redux"],
  },
{
    id:3,
    name:"Alienwares",
    about:"Etsy for aliens",
    technologies:["React Redux","Rails"],
  },
];

function ProjectList({ projects }) {

  {Object.keys(projects).map((value, index)=>{

    return (
      <div id="projects" key={index}>
        <h2>My Projects</h2>
        <div id="project-list">{/* render ProjectItem components here */
        <h3>{key}:{projects[key]}</h3>
        }  
        </div>
      </div>
    );

  })};

}

export default ProjectList;
