import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_GITHUB_API_URL)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);
  

  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold">Projects</h2>
      <p className="text-gray-700 py-3">Here are some of my recent works.</p>
      <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="bg-gray-100 p-6 h-44 w-auto space-y-2 rounded-md shadow-md">
              
                <h1 className="text-xl md:text-2xl text-green-500 font-bold">{project.name}</h1>
                <p className="line-clamp-3 text-gray-500">{project.description || "No description available"}</p>
                <a className="text-blue-500 font-semibold" href={project.html_url} target="_blank" rel="noopener noreferrer">Repo Link</a>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg text-center">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
