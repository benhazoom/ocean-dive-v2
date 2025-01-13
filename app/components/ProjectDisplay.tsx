import React from 'react';

interface ProjectDisplayProps {
    title: string;
    img: string;
    stack: string[];
    link: string;
}

const ProjectDisplay: React.FC<ProjectDisplayProps> = ({ title, img, stack, link }) => {
    return (
        <div className="project-display">
            <h2>{title}</h2>
            <img src={img} alt={`${title} screenshot`} />
            <ul>
                {stack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectDisplay;